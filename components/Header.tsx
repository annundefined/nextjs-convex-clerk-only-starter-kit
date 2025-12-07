"use client";

import Link from "next/link";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";

export function Header() {
  const { openUserProfile } = useClerk();
  const { user } = useUser();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-white p-4 dark:bg-black">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold">
          Starter Kit
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/sample" className="hover:underline">
            Sample
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <AuthLoading>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
        </AuthLoading>

        <Authenticated>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <button onClick={() => openUserProfile()}>
            {!!user?.fullName && user?.fullName}{" "}
            {user?.emailAddresses[0].emailAddress || "hello@example.com"}
          </button>
          <UserButton />
        </Authenticated>

        <Unauthenticated>
          <SignInButton mode="modal">
            <button className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Sign Up
            </button>
          </SignUpButton>
        </Unauthenticated>
      </div>
    </header>
  );
}
