"use client";

import { Authenticated, Unauthenticated } from "convex/react";

export default function LoginMessage() {
  return (
    <div className="mt-20">
      <Authenticated>
        <p className="text-green-700 dark:text-green-200">
          Welcome back! You are logged in and can view this secret message.
        </p>
      </Authenticated>

      <Unauthenticated>
        <p className="text-red-700 dark:text-red-200">
          Sign in to see a different message.
        </p>
      </Unauthenticated>
    </div>
  );
}
