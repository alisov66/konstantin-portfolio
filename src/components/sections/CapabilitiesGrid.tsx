import CapabilityCard from "@/components/ui/CapabilityCard";
import { capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

type Dot = readonly [x: number, y: number];

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

      <div className="grid w-full max-w-[var(--container-max)] auto-rows-fr grid-cols-1 items-stretch gap-[var(--base-6)] lg:grid-cols-3">
        <CapabilityCard
          capability={complexWorkflow}
          className="h-full w-full"
        />

        <div className="hidden min-h-[280px] items-center justify-center lg:flex">
          <GemIcon />
        </div>

        <CapabilityCard
          capability={designSystems}
          className="h-full w-full"
        />
        <CapabilityCard
          capability={documentation}
          className="h-full w-full"
        />
        <CapabilityCard
          capability={productScale}
          className="h-full w-full"
        />
        <CapabilityCard
          capability={mobile}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
