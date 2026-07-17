"use client";

import { useCallback, useRef, useState } from "react";

import CapabilityCard from "@/components/ui/CapabilityCard";
import { capabilities } from "@/data/capabilities";
import { tokens } from "@/styles/tokens";

type Dot = readonly [x: number, y: number];

const gemSize = 208;
const maxGemRotateX = 12;
const maxGemRotateY = 14;

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
  dots,
  lookX,
  lookY,
  size,
  color,
  dotSize,
}: {
  dots: readonly Dot[];
  lookX: number;
  lookY: number;
  size: number;
  color: string;
  dotSize: number;
}) {
  return (
    <span
      aria-hidden
      className="relative block shrink-0 overflow-hidden"
      style={{
        height: size,
        transformStyle: "preserve-3d",
        width: size,
      }}
    >
      {dots.map(([x, y], index) => {
        const normalizedX = (x + dotSize / 2 - size / 2) / (size / 2);
        const normalizedY = (y + dotSize / 2 - size / 2) / (size / 2);
        const depth = normalizedX * lookX + normalizedY * lookY;
        const translateX = lookX * depth * 7;
        const translateY = lookY * depth * 7;
        const translateZ = depth * 28;
        const scale = 1 + depth * 0.08;

        return (
          <span
            className="absolute rounded-full transition-transform duration-300 ease-out will-change-transform"
            key={`${x}-${y}-${index}`}
            style={{
              backgroundColor: color,
              height: dotSize,
              left: x,
              top: y,
              transform: `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, ${translateZ.toFixed(2)}px) scale(${scale.toFixed(3)})`,
              width: dotSize,
            }}
          />
        );
      })}
    </span>
  );
}

function GemIcon({
  lookX,
  lookY,
  state = "1",
}: {
  lookX: number;
  lookY: number;
  state?: "1" | "2";
}) {
  return (
    <DotPattern
      color="#659d4d"
      dotSize={8}
      dots={gemDotsByState[state]}
      lookX={lookX}
      lookY={lookY}
      size={gemSize}
    />
  );
}

export default function CapabilitiesGrid() {
  const [gemLook, setGemLook] = useState({ x: 0, y: 0 });
  const gemRef = useRef<HTMLDivElement | null>(null);
  const [complexWorkflow, designSystems, documentation, productScale, mobile] =
    capabilities;

  const pointGemAtCard = useCallback((card: HTMLElement) => {
    const gem = gemRef.current;

    if (!gem) {
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const gemRect = gem.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const gemCenterX = gemRect.left + gemRect.width / 2;
    const gemCenterY = gemRect.top + gemRect.height / 2;
    const rangeX = Math.max(window.innerWidth / 2, 1);
    const rangeY = Math.max(window.innerHeight / 2, 1);
    const lookX = Math.max(-1, Math.min(1, (cardCenterX - gemCenterX) / rangeX));
    const lookY = Math.max(-1, Math.min(1, (cardCenterY - gemCenterY) / rangeY));

    setGemLook({ x: lookX, y: lookY });
  }, []);

  const resetGemTransform = useCallback(() => {
    setGemLook({ x: 0, y: 0 });
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
          onBlur={resetGemTransform}
          onFocus={(event) => pointGemAtCard(event.currentTarget)}
          onMouseEnter={(event) => pointGemAtCard(event.currentTarget)}
          onMouseLeave={resetGemTransform}
        />

        <div className="hidden min-h-[280px] items-center justify-center lg:flex">
          <div
            className="transition-transform duration-300 ease-out will-change-transform"
            ref={gemRef}
            style={{
              transform: `perspective(700px) rotateX(${(-gemLook.y * maxGemRotateX).toFixed(2)}deg) rotateY(${(gemLook.x * maxGemRotateY).toFixed(2)}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <GemIcon
              lookX={gemLook.x}
              lookY={gemLook.y}
            />
          </div>
        </div>

        <CapabilityCard
          capability={designSystems}
          className="h-full w-full"
          onBlur={resetGemTransform}
          onFocus={(event) => pointGemAtCard(event.currentTarget)}
          onMouseEnter={(event) => pointGemAtCard(event.currentTarget)}
          onMouseLeave={resetGemTransform}
        />
        <CapabilityCard
          capability={productScale}
          className="h-full w-full"
          onBlur={resetGemTransform}
          onFocus={(event) => pointGemAtCard(event.currentTarget)}
          onMouseEnter={(event) => pointGemAtCard(event.currentTarget)}
          onMouseLeave={resetGemTransform}
        />
        <CapabilityCard
          capability={documentation}
          className="h-full w-full"
          onBlur={resetGemTransform}
          onFocus={(event) => pointGemAtCard(event.currentTarget)}
          onMouseEnter={(event) => pointGemAtCard(event.currentTarget)}
          onMouseLeave={resetGemTransform}
        />
        <CapabilityCard
          capability={mobile}
          className="h-full w-full"
          onBlur={resetGemTransform}
          onFocus={(event) => pointGemAtCard(event.currentTarget)}
          onMouseEnter={(event) => pointGemAtCard(event.currentTarget)}
          onMouseLeave={resetGemTransform}
        />
      </div>
    </section>
  );
}
