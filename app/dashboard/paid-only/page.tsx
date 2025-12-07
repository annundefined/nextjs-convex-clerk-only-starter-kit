import { Protect } from "@clerk/nextjs";

function FreeContent() {
  return (
    <>
      This is the &apos;free content&apos; you are seeing right now. This would
      be good to also include up-selling like an upgrade nudge card. Subscribe
      to some paid tier and you will see different content.
    </>
  );
}

function PaidContent() {
  return <>This is the awesome Content you paid for!</>;
}

export default function PaidOnlyPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Paid only</h1>

      <div className="p-6 bg-green-100 rounded-lg dark:bg-green-900">
        <h2 className="text-2xl font-semibold text-green-800 dark:text-green-100">
          Your content below:
        </h2>
        <p className="mt-2 text-green-700 dark:text-green-200">
          <Protect
            fallback={<FreeContent />}
            condition={(has) => {
              return !has({ plan: "free_user" });
            }}
          >
            <PaidContent />
          </Protect>
        </p>
      </div>
    </div>
  );
}
