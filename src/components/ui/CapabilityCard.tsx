import Link from "next/link";

import type { CapabilityId, capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

type Dot = readonly [x: number, y: number];

const iconDotsByCapability: Record<CapabilityId, readonly Dot[]> = {
  "complex-workflow-design": [
    [30, 21], [38, 28], [46, 28], [54, 28], [62, 21],
    [46, 36],
    [30, 43], [38, 50], [46, 50], [54, 50], [62, 43],
    [46, 58],
    [30, 65], [38, 72], [46, 72], [54, 72], [62, 65],
  ],
  "design-systems": [
    [24, 24], [32, 28], [40, 32], [48, 36], [56, 40],
    [64, 44], [72, 48],
  ],
  "documentation-collaboration": [
    [44, 18], [36, 26], [52, 26],
    [28, 34], [44, 34], [60, 34],
    [36, 42], [52, 42],
    [44, 50],
    [36, 58], [52, 58],
    [44, 66],
  ],
  "product-design-at-scale": [
    [44, 18],
    [36, 26], [52, 26],
    [28, 34], [44, 34], [60, 34],
    [36, 42], [52, 42],
    [44, 50],
  ],
  "mobile-experiences": [
    [28, 36], [36, 28], [44, 28], [52, 28], [60, 36],
    [20, 44], [36, 44], [52, 44], [68, 44],
    [28, 52], [44, 52], [60, 52],
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
  color,
  dotSize,
}: {
  dots: readonly Dot[];
  size: number;
  color: string;
  dotSize: number;
}) {
  return (
    <span
      aria-hidden
      className="relative block shrink-0 overflow-hidden"
      style={{ height: size, width: size }}
    >
      {dots.map(([x, y], index) => (
        <span
          className="absolute rounded-full"
          key={`${x}-${y}-${index}`}
          style={{
            backgroundColor: color,
            height: dotSize,
            left: x,
            top: y,
            width: dotSize,
          }}
        />
      ))}
    </span>
  );
}

function CapabilityIcon({ id }: { id: CapabilityId }) {
  return (
    <DotPattern
      color="var(--text-accent)"
      dotSize={4}
      dots={iconDotsByCapability[id]}
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
