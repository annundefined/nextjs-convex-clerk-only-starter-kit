import {
  internalMutation,
  query,
  mutation,
  QueryCtx,
} from "./_generated/server";
import { UserJSON } from "@clerk/backend";
import { v, Validator } from "convex/values";

export const current = query({
  args: {},
  handler: async (ctx) => {
    return await getCurrentUser(ctx);
  },
});

export const upsertFromClerk = internalMutation({
  args: { data: v.any() as Validator<UserJSON> }, // no runtime validation, trust Clerk
  async handler(ctx, { data }) {
    const userAttributes = {
      name: `${data.first_name} ${data.last_name}`,
      externalId: data.id,
      email: data.email_addresses[0]?.email_address,
      authProvider: data.external_accounts[0]?.provider,
      username: data.username ?? undefined,
      updatedAt: data.updated_at,
      lastSignInAt: data.last_sign_in_at ?? undefined,
      lastActiveAt: data.last_active_at ?? undefined,
    };

    const user = await userByExternalId(ctx, data.id);
    if (user === null) {
      await ctx.db.insert("users", userAttributes);
    } else {
      await ctx.db.patch(user._id, userAttributes);
    }
  },
});

export const deleteFromClerk = internalMutation({
  args: { clerkUserId: v.string() },
  async handler(ctx, { clerkUserId }) {
    const user = await userByExternalId(ctx, clerkUserId);

    if (user !== null) {
      await ctx.db.delete(user._id);
    } else {
      console.warn(
        `Can't delete user, there is none for Clerk user ID: ${clerkUserId}`
      );
    }
  },
});

export const updateActivity = mutation({
  args: {
    lastSignInAt: v.optional(v.number()),
    lastActiveAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user) {
      return;
    }
    await ctx.db.patch(user._id, args);
  },
});

export const updateSubscription = internalMutation({
  args: {
    subscriptionId: v.string(),
    userId: v.string(),
    status: v.string(),
    subscriptionItemStatus: v.optional(v.string()),
    planName: v.optional(v.string()),
  },
  handler: async (
    ctx,
    { subscriptionId, userId, status, subscriptionItemStatus, planName }
  ) => {
    const user = await userByExternalId(ctx, userId);
    if (user) {
      await ctx.db.patch(user._id, {
        subscriptionId,
        subscriptionStatus: status,
        subscriptionItemStatus,
        planName,
      });
    } else {
      console.warn(
        `Skipping subscription update for non-existent user: ${userId}`
      );
    }
  },
});

export async function getCurrentUserOrThrow(ctx: QueryCtx) {
  const userRecord = await getCurrentUser(ctx);
  if (!userRecord) throw new Error("Can't get current user");
  return userRecord;
}

export async function getCurrentUser(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (identity === null) {
    return null;
  }
  return await userByExternalId(ctx, identity.subject);
}

async function userByExternalId(ctx: QueryCtx, externalId: string) {
  return await ctx.db
    .query("users")
    .withIndex("byExternalId", (q) => q.eq("externalId", externalId))
    .unique();
}
