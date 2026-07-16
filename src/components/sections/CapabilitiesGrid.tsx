import Link from "next/link";

import { capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

function typeStyle(token: {
  fontSize: string | number;
  lineHeight: string | number;
  fontWeight: string | number;
}) {
  return {
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    fontWeight: token.fontWeight,
  };
}

export default function CapabilitiesGrid() {
  return (
    <section
      className="flex w-full flex-col gap-[var(--base-20)] bg-[var(--bg-beige)] px-[var(--padding-side)] py-[136px]"
      id="work"
    >
      <div className="flex w-full flex-col gap-[var(--base-4)]">
        <h2
          className="text-[var(--text-accent)]"
          style={typeStyle(tokens.typography.heading.h2)}
        >
          Capabilities
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-[var(--base-5)] md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability) => (
          <Link
            className="flex min-h-[220px] flex-col justify-between rounded-[var(--lg)] bg-[var(--bg-beige-light)] p-[var(--base-6)] text-[var(--text-primary)] no-underline transition-[background-color,transform] duration-[150ms] ease-in hover:-translate-y-1 hover:bg-[var(--button-secondary)] focus-visible:-translate-y-1 focus-visible:bg-[var(--button-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text-primary)]"
            href={`/capabilities/${capability.id}`}
            key={capability.id}
          >
            <span
              style={typeStyle(tokens.typography.heading.h5)}
            >
              {capability.label}
            </span>
            <span
              className="max-w-[30ch] text-[var(--text-secondary)]"
              style={typeStyle(tokens.typography.body.small)}
            >
              {capability.summary}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
