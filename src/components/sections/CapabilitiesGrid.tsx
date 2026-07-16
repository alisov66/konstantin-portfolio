import Link from "next/link";

import { capabilities, type CapabilityId } from "@/data/capabilities";
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

const gemDots: readonly Dot[] = [
  [96, 18],
  [72, 32], [88, 32], [104, 32], [120, 32],
  [56, 46], [72, 46], [88, 46], [104, 46], [120, 46], [136, 46],
  [40, 60], [56, 60], [72, 60], [88, 60], [104, 60], [120, 60], [136, 60], [152, 60],
  [56, 74], [72, 74], [88, 74], [104, 74], [120, 74], [136, 74],
  [40, 88], [56, 88], [72, 88], [88, 88], [104, 88], [120, 88], [136, 88], [152, 88],
  [56, 102], [72, 102], [88, 102], [104, 102], [120, 102], [136, 102],
  [72, 116], [88, 116], [104, 116], [120, 116],
  [88, 130], [104, 130],
  [96, 144],
];

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

function GemIcon() {
  return (
    <DotPattern
      color="#659d4d"
      dotSize={8}
      dots={gemDots}
      size={194}
    />
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

function CapabilityCard({
  capability,
}: {
  capability: (typeof capabilities)[number];
}) {
  return (
    <Link
      className="flex h-[316px] flex-col items-start gap-[var(--base-3)] rounded-[var(--xl)] bg-[var(--bg-beige-light)] p-[var(--base-6)] text-[var(--text-primary)] no-underline transition-[background-color,transform] duration-[150ms] ease-in hover:-translate-y-1 hover:bg-[var(--button-secondary)] focus-visible:-translate-y-1 focus-visible:bg-[var(--button-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text-primary)]"
      href={`/capabilities/${capability.id}`}
    >
      <CapabilityIcon id={capability.id} />

      <span className="flex w-full flex-col gap-[var(--base-6)]">
        <span
          className="h-[72px] text-[var(--text-primary)]"
          style={typeStyle(tokens.typography.heading.h4)}
        >
          {capability.label}
        </span>
        <span
          className="flex h-[72px] flex-col justify-end text-[var(--text-primary)]"
          style={typeStyle(tokens.typography.body.small)}
        >
          {capability.summary}
        </span>
      </span>
    </Link>
  );
}

export default function CapabilitiesGrid() {
  const [complexWorkflow, designSystems, documentation, productScale, mobile] =
    capabilities;

  return (
    <section
      className="flex w-full flex-col items-center gap-[var(--base-10)] bg-[var(--bg-beige)] px-[var(--padding-side)] pb-[var(--base-10)] pt-[var(--base-30)]"
      id="work"
    >
      <h2
        className="w-full text-center text-[var(--text-accent)]"
        style={typeStyle(tokens.typography.heading.h2)}
      >
        Capabilities
      </h2>

      <div className="grid w-full max-w-[var(--container-max)] grid-cols-1 gap-[var(--base-6)] lg:grid-cols-3">
        <CapabilityCard capability={complexWorkflow} />

        <div className="hidden h-[316px] items-center justify-center lg:flex">
          <GemIcon />
        </div>

        <CapabilityCard capability={designSystems} />
        <CapabilityCard capability={documentation} />
        <CapabilityCard capability={productScale} />
        <CapabilityCard capability={mobile} />
      </div>
    </section>
  );
}
