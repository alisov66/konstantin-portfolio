import CapabilityCard from "@/components/ui/CapabilityCard";
import { capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

type Dot = readonly [x: number, y: number];

const gemDotsByState: Record<"1" | "2", readonly Dot[]> = {
  "1": [
    [69, 27], [140, 41], [126, 27], [12, 55], [69, 112], [169, 41],
    [55, 41], [112, 98], [83, 98], [183, 55], [154, 27], [126, 112],
    [40, 27], [140, 127], [55, 127], [26, 41], [97, 27], [83, 41],
    [83, 70], [112, 41], [97, 84], [126, 55], [69, 55], [112, 70],
    [55, 98], [69, 84], [55, 70], [12, 84], [26, 70], [40, 55],
    [26, 98], [40, 112], [97, 112], [83, 126], [112, 126], [97, 169],
    [112, 155], [69, 141], [83, 155], [126, 141], [140, 70], [169, 70],
    [140, 98], [126, 84], [155, 55], [155, 112], [183, 84], [169, 98],
  ],
  "2": [
    [69, 27], [140, 41], [126, 27], [12, 55], [69, 112], [169, 41],
    [55, 41], [112, 98], [83, 98], [183, 55], [154, 27], [126, 112],
    [40, 27], [140, 127], [55, 127], [26, 41], [112, 70], [126, 55],
    [112, 41], [69, 55], [83, 41], [97, 27], [83, 70], [97, 84],
    [154, 56], [140, 70], [140, 99], [169, 70], [154, 113], [183, 84],
    [126, 84], [169, 99], [83, 126], [112, 126], [83, 155], [69, 140],
    [97, 112], [97, 169], [126, 140], [112, 155], [40, 56], [26, 70],
    [55, 70], [40, 113], [55, 99], [12, 84], [26, 99], [69, 84],
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

function GemIcon({ state = "1" }: { state?: "1" | "2" }) {
  return (
    <DotPattern
      color="#659d4d"
      dotSize={8}
      dots={gemDotsByState[state]}
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
