"use client";

import { useMutation, useConvexAuth } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect } from "react";

export function UserActivityTracker() {
  const { isAuthenticated } = useConvexAuth();
  const updateActivity = useMutation(api.users.updateActivity);

  useEffect(() => {
    if (isAuthenticated) {
      // Update lastSignInAt and lastActiveAt when the component mounts and the user is authenticated.
      // This effectively captures the "sign in" event or app open event.
      updateActivity({
        lastSignInAt: Date.now(),
        lastActiveAt: Date.now(),
      });
    }
  }, [isAuthenticated, updateActivity]);

  return null;
}
