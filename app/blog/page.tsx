import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Nicholas Lin",
  description: "Straight from the mind of Nicholas Lin.",
};

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: 'var(--fg-primary)' }}
        >
          Blog
        </h1>
        <p
          className="text-base md:text-lg"
          style={{ color: 'var(--fg-muted)' }}
        >
          I love talking. And writing too! I need to figure out what I want to put on this page though...
        </p>
      </div>

    </div>
  );
}
