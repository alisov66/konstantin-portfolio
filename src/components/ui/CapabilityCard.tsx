import Link from "next/link";

import type { CapabilityId, capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

type CapabilityIconDot = {
  readonly x: number;
  readonly y: number;
  readonly size: 4 | 8;
  readonly tone: "accent" | "tertiary";
};

const capabilityIconDots: Record<CapabilityId, readonly CapabilityIconDot[]> = {
  "complex-workflow-design": [
    { x: 16, y: 16, size: 8, tone: "accent" },
    { x: 30, y: 18, size: 4, tone: "accent" },
    { x: 42, y: 18, size: 4, tone: "accent" },
    { x: 54, y: 18, size: 4, tone: "tertiary" },
    { x: 64, y: 16, size: 8, tone: "accent" },
    { x: 18, y: 30, size: 4, tone: "tertiary" },
    { x: 30, y: 30, size: 4, tone: "tertiary" },
    { x: 42, y: 30, size: 4, tone: "accent" },
    { x: 54, y: 30, size: 4, tone: "tertiary" },
    { x: 66, y: 30, size: 4, tone: "tertiary" },
    { x: 18, y: 42, size: 4, tone: "tertiary" },
    { x: 30, y: 42, size: 4, tone: "tertiary" },
    { x: 40, y: 40, size: 8, tone: "accent" },
    { x: 54, y: 42, size: 4, tone: "accent" },
    { x: 66, y: 42, size: 4, tone: "accent" },
    { x: 18, y: 54, size: 4, tone: "accent" },
    { x: 30, y: 54, size: 4, tone: "accent" },
    { x: 42, y: 54, size: 4, tone: "accent" },
    { x: 54, y: 54, size: 4, tone: "tertiary" },
    { x: 66, y: 54, size: 4, tone: "accent" },
    { x: 16, y: 64, size: 8, tone: "accent" },
    { x: 30, y: 66, size: 4, tone: "tertiary" },
    { x: 42, y: 66, size: 4, tone: "tertiary" },
    { x: 54, y: 66, size: 4, tone: "tertiary" },
    { x: 64, y: 64, size: 8, tone: "accent" },
  ],
  "design-systems": [
    { x: 18, y: 18, size: 4, tone: "accent" },
    { x: 30, y: 18, size: 4, tone: "tertiary" },
    { x: 42, y: 18, size: 4, tone: "accent" },
    { x: 54, y: 18, size: 4, tone: "tertiary" },
    { x: 66, y: 18, size: 4, tone: "accent" },
    { x: 18, y: 30, size: 4, tone: "tertiary" },
    { x: 28, y: 28, size: 8, tone: "accent" },
    { x: 42, y: 30, size: 4, tone: "accent" },
    { x: 52, y: 28, size: 8, tone: "accent" },
    { x: 66, y: 30, size: 4, tone: "tertiary" },
    { x: 18, y: 42, size: 4, tone: "accent" },
    { x: 30, y: 42, size: 4, tone: "accent" },
    { x: 42, y: 42, size: 4, tone: "tertiary" },
    { x: 54, y: 42, size: 4, tone: "accent" },
    { x: 66, y: 42, size: 4, tone: "accent" },
    { x: 18, y: 54, size: 4, tone: "tertiary" },
    { x: 28, y: 52, size: 8, tone: "accent" },
    { x: 42, y: 54, size: 4, tone: "accent" },
    { x: 52, y: 52, size: 8, tone: "accent" },
    { x: 66, y: 54, size: 4, tone: "tertiary" },
    { x: 18, y: 66, size: 4, tone: "accent" },
    { x: 30, y: 66, size: 4, tone: "tertiary" },
    { x: 42, y: 66, size: 4, tone: "accent" },
    { x: 54, y: 66, size: 4, tone: "tertiary" },
    { x: 66, y: 66, size: 4, tone: "accent" },
  ],
  "documentation-collaboration": [
    { x: 16, y: 16, size: 8, tone: "accent" },
    { x: 30, y: 18, size: 4, tone: "tertiary" },
    { x: 40, y: 16, size: 8, tone: "accent" },
    { x: 54, y: 18, size: 4, tone: "tertiary" },
    { x: 66, y: 18, size: 4, tone: "accent" },
    { x: 18, y: 30, size: 4, tone: "tertiary" },
    { x: 30, y: 30, size: 4, tone: "tertiary" },
    { x: 42, y: 30, size: 4, tone: "tertiary" },
    { x: 54, y: 30, size: 4, tone: "accent" },
    { x: 66, y: 30, size: 4, tone: "tertiary" },
    { x: 16, y: 40, size: 8, tone: "accent" },
    { x: 30, y: 42, size: 4, tone: "tertiary" },
    { x: 40, y: 40, size: 8, tone: "accent" },
    { x: 54, y: 42, size: 4, tone: "tertiary" },
    { x: 64, y: 40, size: 8, tone: "accent" },
    { x: 18, y: 54, size: 4, tone: "tertiary" },
    { x: 30, y: 54, size: 4, tone: "accent" },
    { x: 42, y: 54, size: 4, tone: "tertiary" },
    { x: 54, y: 54, size: 4, tone: "tertiary" },
    { x: 66, y: 54, size: 4, tone: "tertiary" },
    { x: 18, y: 66, size: 4, tone: "accent" },
    { x: 30, y: 66, size: 4, tone: "tertiary" },
    { x: 40, y: 64, size: 8, tone: "accent" },
    { x: 54, y: 66, size: 4, tone: "tertiary" },
    { x: 64, y: 64, size: 8, tone: "accent" },
  ],
  "product-design-at-scale": [
    { x: 18, y: 18, size: 4, tone: "accent" },
    { x: 30, y: 18, size: 4, tone: "tertiary" },
    { x: 40, y: 16, size: 8, tone: "accent" },
    { x: 54, y: 18, size: 4, tone: "tertiary" },
    { x: 66, y: 18, size: 4, tone: "accent" },
    { x: 18, y: 30, size: 4, tone: "tertiary" },
    { x: 30, y: 30, size: 4, tone: "accent" },
    { x: 42, y: 30, size: 4, tone: "tertiary" },
    { x: 54, y: 30, size: 4, tone: "accent" },
    { x: 66, y: 30, size: 4, tone: "tertiary" },
    { x: 16, y: 40, size: 8, tone: "accent" },
    { x: 30, y: 42, size: 4, tone: "tertiary" },
    { x: 42, y: 42, size: 4, tone: "accent" },
    { x: 54, y: 42, size: 4, tone: "tertiary" },
    { x: 64, y: 40, size: 8, tone: "accent" },
    { x: 18, y: 54, size: 4, tone: "tertiary" },
    { x: 30, y: 54, size: 4, tone: "accent" },
    { x: 42, y: 54, size: 4, tone: "tertiary" },
    { x: 54, y: 54, size: 4, tone: "accent" },
    { x: 66, y: 54, size: 4, tone: "tertiary" },
    { x: 18, y: 66, size: 4, tone: "accent" },
    { x: 30, y: 66, size: 4, tone: "tertiary" },
    { x: 40, y: 64, size: 8, tone: "accent" },
    { x: 54, y: 66, size: 4, tone: "tertiary" },
    { x: 66, y: 66, size: 4, tone: "accent" },
  ],
  "mobile-experiences": [
    { x: 18, y: 18, size: 4, tone: "tertiary" },
    { x: 30, y: 18, size: 4, tone: "tertiary" },
    { x: 42, y: 18, size: 4, tone: "tertiary" },
    { x: 54, y: 18, size: 4, tone: "tertiary" },
    { x: 64, y: 16, size: 8, tone: "accent" },
    { x: 16, y: 28, size: 8, tone: "accent" },
    { x: 30, y: 30, size: 4, tone: "accent" },
    { x: 40, y: 28, size: 8, tone: "accent" },
    { x: 54, y: 30, size: 4, tone: "tertiary" },
    { x: 66, y: 30, size: 4, tone: "tertiary" },
    { x: 18, y: 42, size: 4, tone: "accent" },
    { x: 30, y: 42, size: 4, tone: "tertiary" },
    { x: 42, y: 42, size: 4, tone: "accent" },
    { x: 54, y: 42, size: 4, tone: "accent" },
    { x: 66, y: 42, size: 4, tone: "tertiary" },
    { x: 18, y: 54, size: 4, tone: "accent" },
    { x: 30, y: 54, size: 4, tone: "tertiary" },
    { x: 42, y: 54, size: 4, tone: "accent" },
    { x: 54, y: 54, size: 4, tone: "accent" },
    { x: 66, y: 54, size: 4, tone: "accent" },
    { x: 16, y: 64, size: 8, tone: "accent" },
    { x: 30, y: 66, size: 4, tone: "tertiary" },
    { x: 40, y: 64, size: 8, tone: "accent" },
    { x: 54, y: 66, size: 4, tone: "accent" },
    { x: 66, y: 66, size: 4, tone: "accent" },
  ],
};

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

function DotPattern({
  dots,
  size,
  colorByTone,
}: {
  dots: readonly CapabilityIconDot[];
  size: number;
  colorByTone: Record<CapabilityIconDot["tone"], string>;
}) {
  return (
    <span
      aria-hidden
      className="relative block shrink-0 overflow-hidden"
      style={{ height: size, width: size }}
    >
      {dots.map((dot, index) => (
        <span
          className="absolute rounded-full"
          key={`${dot.x}-${dot.y}-${index}`}
          style={{
            backgroundColor: colorByTone[dot.tone],
            height: dot.size,
            left: dot.x,
            top: dot.y,
            width: dot.size,
          }}
        />
      ))}
    </span>
  );
}

function CapabilityIcon({ id }: { id: CapabilityId }) {
  return (
    <DotPattern
      colorByTone={{
        accent: "var(--text-accent)",
        tertiary: "var(--text-tertiary)",
      }}
      dots={capabilityIconDots[id]}
      size={88}
    />
  );
}

export interface CapabilityCardProps {
  capability: (typeof capabilities)[number];
  className?: string;
}

export default function CapabilityCard({
  capability,
  className,
}: CapabilityCardProps) {
  return (
    <Link
      className={[
        "flex min-h-[280px] w-[312px] flex-col items-start gap-[var(--base-3)] rounded-[var(--xl)] bg-[var(--bg-beige-light)] p-[var(--base-6)] text-[var(--text-primary)] no-underline",
        "transition-[background-color,transform] duration-[150ms] ease-in hover:-translate-y-1 hover:bg-[var(--button-secondary)] focus-visible:-translate-y-1 focus-visible:bg-[var(--button-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text-primary)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-name="capability card"
      href={`/capabilities/${capability.id}`}
    >
      <CapabilityIcon id={capability.id} />

      <span className="flex w-full flex-1 flex-col items-start">
        <span
          className="w-full text-[var(--text-primary)]"
          style={typeStyle(tokens.typography.heading.h5)}
        >
          {capability.label}
        </span>
        <span
          className="mt-auto w-full pt-[var(--base-3)] text-[var(--text-primary)]"
          style={typeStyle(tokens.typography.body.small)}
        >
          {capability.summary}
        </span>
      </span>
    </Link>
  );
}
