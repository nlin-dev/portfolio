import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Powerlifting - Nicholas Lin",
  description: "I love powerlifting. I will write more about this when I have time.",
};

export default function PowerliftingPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: 'var(--fg-primary)' }}
        >
          Powerlifting
        </h1>
        <p
          className="text-base md:text-lg"
          style={{ color: 'var(--fg-muted)' }}
        >
          I love powerlifting. I will write more about this when I have time.
        </p>
      </div>
    </div>
  );
}
