"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import CapabilityCard from "@/components/ui/CapabilityCard";
import { capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

type Dot = readonly [x: number, y: number];

const gemAnimationDuration = 1251;

const gemDotsByState: Record<"1" | "2", readonly Dot[]> = {
  "1": [
    [68, 30], [132, 30], [164, 30], [36, 30], [100, 30], [148, 46],
    [180, 46], [52, 46], [20, 46], [84, 46], [116, 46], [52, 78],
    [20, 78], [84, 78], [116, 78], [148, 78], [180, 78], [4, 62],
    [196, 62], [36, 62], [132, 62], [68, 62], [164, 62], [68, 94],
    [4, 94], [100, 94], [132, 94], [196, 94], [116, 110], [84, 110],
    [52, 110], [20, 110], [148, 110], [180, 110], [68, 126], [132, 126],
    [36, 126], [164, 126], [100, 126], [148, 142], [52, 142], [84, 142],
    [116, 142], [100, 190], [116, 174], [84, 174], [68, 158], [132, 158],
  ],
  "2": [
    [68, 30], [132, 30], [164, 30], [36, 30], [164, 62], [148, 46],
    [180, 46], [52, 46], [20, 46], [148, 78], [180, 78], [116, 46],
    [84, 46], [148, 110], [180, 110], [84, 142], [116, 142], [4, 62],
    [196, 62], [100, 30], [196, 94], [132, 94], [100, 126], [132, 62],
    [68, 62], [164, 126], [68, 158], [132, 158], [116, 110], [84, 110],
    [116, 78], [84, 78], [84, 174], [116, 174], [68, 126], [132, 126],
    [100, 94], [100, 190], [36, 62], [148, 142], [52, 142], [20, 78],
    [52, 78], [36, 126], [52, 110], [20, 110], [4, 94], [68, 94],
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
  animationKey,
  dots,
  toDots,
  size,
  color,
  dotSize,
}: {
  animationKey?: number;
  dots: readonly Dot[];
  toDots?: readonly Dot[];
  size: number;
  color: string;
  dotSize: number;
}) {
  return (
    <span
      aria-hidden
      className="relative block shrink-0 overflow-hidden"
      key={animationKey}
      style={{ height: size, width: size }}
    >
      {dots.map(([x, y], index) => (
        <span
          className={[
            "absolute rounded-full",
            toDots && animationKey ? "gem-icon-dot" : undefined,
          ]
            .filter(Boolean)
            .join(" ")}
          key={`${x}-${y}-${index}`}
          style={{
            "--gem-dot-x": toDots ? `${toDots[index][0] - x}px` : "0px",
            "--gem-dot-y": toDots ? `${toDots[index][1] - y}px` : "0px",
            backgroundColor: color,
            height: dotSize,
            left: x,
            top: y,
            width: dotSize,
          } as CSSProperties}
        />
      ))}
    </span>
  );
}

function GemIcon({
  animationKey,
  state = "1",
}: {
  animationKey: number;
  state?: "1" | "2";
}) {
  return (
    <DotPattern
      animationKey={animationKey}
      color="#659d4d"
      dotSize={8}
      dots={gemDotsByState[state]}
      size={208}
      toDots={gemDotsByState[state === "1" ? "2" : "1"]}
    />
  );
}

export default function CapabilitiesGrid() {
  const [gemAnimationKey, setGemAnimationKey] = useState(0);
  const gemIsAnimatingRef = useRef(false);
  const gemAnimationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [complexWorkflow, designSystems, documentation, productScale, mobile] =
    capabilities;

  const playGemAnimation = useCallback(() => {
    if (gemIsAnimatingRef.current) {
      return;
    }

    gemIsAnimatingRef.current = true;
    setGemAnimationKey((currentKey) => currentKey + 1);

    gemAnimationTimeoutRef.current = setTimeout(() => {
      gemIsAnimatingRef.current = false;
      gemAnimationTimeoutRef.current = null;
    }, gemAnimationDuration);
  }, []);

  useEffect(() => {
    return () => {
      if (gemAnimationTimeoutRef.current) {
        clearTimeout(gemAnimationTimeoutRef.current);
      }
    };
  }, []);

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

      <div className="capabilities-grid grid w-full max-w-[var(--container-max)] auto-rows-fr grid-cols-1 items-stretch gap-[var(--base-6)] lg:grid-cols-3">
        <CapabilityCard
          capability={complexWorkflow}
          className="h-full w-full"
          onFocus={playGemAnimation}
          onMouseEnter={playGemAnimation}
        />

        <div className="hidden min-h-[280px] items-center justify-center lg:flex">
          <GemIcon animationKey={gemAnimationKey} />
        </div>

        <CapabilityCard
          capability={designSystems}
          className="h-full w-full"
          onFocus={playGemAnimation}
          onMouseEnter={playGemAnimation}
        />
        <CapabilityCard
          capability={productScale}
          className="h-full w-full"
          onFocus={playGemAnimation}
          onMouseEnter={playGemAnimation}
        />
        <CapabilityCard
          capability={documentation}
          className="h-full w-full"
          onFocus={playGemAnimation}
          onMouseEnter={playGemAnimation}
        />
        <CapabilityCard
          capability={mobile}
          className="h-full w-full"
          onFocus={playGemAnimation}
          onMouseEnter={playGemAnimation}
        />
      </div>
    </section>
  );
}
