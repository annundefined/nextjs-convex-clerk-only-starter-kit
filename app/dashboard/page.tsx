"use client";

import { PricingTable } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <p className="my-8">Select your plan:</p>

      {/* 
      Must enable Clerk Billing to use, subscriptions available only as of 12/2025 
      https://clerk.com/billing
      */}
      <PricingTable />
    </div>
  );
}
