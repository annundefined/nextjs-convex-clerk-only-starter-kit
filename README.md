# Next.js SaaS Starter Kit

A complete starter kit template for building a [Next.js](https://nextjs.org) SaaS applications powered by `Convex` and `Clerk` (for auth _and_ payments).

## Demo

See it in action: `img & link`

## Stack

- ⚡️ Framework: [Next.js](https://nextjs.org) Version 15 with App Router
- ✅ Language: [TypeScript](https://www.typescriptlang.org/)
- 🎨 CSS Framework: [Tailwind](https://tailwindcss.com/)
- 📀 Database (BaaS): [Convex](https://www.convex.dev/) Real-time database with built-in file storage and serverless functions
- 🔒 Authentication & Payments: [Clerk](https://clerk.com/) Have your users login, works with Clerk Billing (must be enabled, Stripe wrapper) for payments, subscriptions only as of 12/1/2025

## Features

The front-end comes bare-bones with simple examples and without the fluff. You add in the tools you need.

## Prerequisites

### Local Dev Environment

Node.js version > 20
pnpm, npm, yarn
default will be pnpm

### Accounts

Convex
Clerk
Polar.sh (optional)

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Get API keys
Convex 01
Clerk 02

## Documentation

### Included

- Convex & Clerk: https://docs.convex.dev/auth/clerk#nextjs
- Convex & Polar Component: https://www.convex.dev/components/polar
- Convex DB Auth: https://docs.convex.dev/auth/database-auth
- Clerk & Convex: https://clerk.com/docs/guides/development/integrations/databases/convex
- Clerk Signup: https://clerk.com/docs/guides/development/clerk-environment-variables#sign-in-and-sign-up-redirects
- Polar & Next.js: https://polar.sh/docs/integrate/sdk/adapters/nextjs

### Deployments

- Deploy on Netlify: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- Deploy on Vercel: https://nextjs.org/docs/app/getting-started/deploying

```bash
# installing deps
pnpm add convex
pnpm add @clerk/nextjs
pnpm add @clerk/backend
pnpm add svix

# logging into convex (generates the convex folder if it doesn't already exist)
npx convex dev
```

Sample Readme

https://github.com/PaddleHQ/paddle-nextjs-starter-kit
