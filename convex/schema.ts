import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    externalId: v.optional(v.string()), // Clerk ID, stored in JWT field
    email: v.optional(v.string()),
    authProvider: v.optional(v.string()),
    username: v.optional(v.string()),
    updatedAt: v.optional(v.number()),
    lastSignInAt: v.optional(v.number()),
    lastActiveAt: v.optional(v.number()),
    subscriptionId: v.optional(v.string()),
    subscriptionStatus: v.optional(v.string()),
    subscriptionItemStatus: v.optional(v.string()),
    planName: v.optional(v.string()),
  }).index("byExternalId", ["externalId"]),
});
