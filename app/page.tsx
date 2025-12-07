import LoginMessage from "@/components/LoginMessage";
import { SimpleCard } from "@/components/SimpleCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-6xl font-bold text-center">
          Undefined Starter Kit
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-12 gap-4">
        <SimpleCard
          heading="Next.js"
          description="The React Framework for the Web. v15 with App Router."
        />
        <SimpleCard
          heading="Database"
          description="Real-time database powered by Convex."
        />
        <SimpleCard
          heading="Authentication"
          description="Secure authentication with Clerk, ready to use out of the box."
        />
        <SimpleCard heading="Styling" description="Tailwind" />
        <SimpleCard heading="Payments" description="Polar.sh" />
      </div>

      <LoginMessage />
    </main>
  );
}
