"use client";

import type {
  AnchorHTMLAttributes,
  CSSProperties,
  PointerEventHandler,
  ReactNode,
} from "react";
import { useState } from "react";

import { tokens } from "@/styles/tokens";

const blobVariants = [
  {
    radiusA: "47% 53% 41% 59% / 56% 38% 62% 44%",
    radiusB: "62% 38% 59% 41% / 44% 58% 42% 56%",
    offsetX: "7px",
    offsetY: "-5px",
    rotateA: "18deg",
    rotateB: "-22deg",
    shadowA:
      "6px -4px 0 1px var(--button-hero-hover), -5px 5px 0 2px var(--button-hero-hover), 3px 7px 0 -1px var(--button-hero-hover)",
    shadowB:
      "-7px -2px 0 0 var(--button-hero-hover), 5px 6px 0 1px var(--button-hero-hover)",
  },
  {
    radiusA: "58% 42% 63% 37% / 39% 61% 45% 55%",
    radiusB: "43% 57% 38% 62% / 60% 40% 57% 43%",
    offsetX: "-6px",
    offsetY: "6px",
    rotateA: "-14deg",
    rotateB: "28deg",
    shadowA:
      "-7px -5px 0 1px var(--button-hero-hover), 6px 4px 0 2px var(--button-hero-hover), -2px 8px 0 -1px var(--button-hero-hover)",
    shadowB:
      "7px -3px 0 0 var(--button-hero-hover), -5px 5px 0 1px var(--button-hero-hover)",
  },
  {
    radiusA: "39% 61% 55% 45% / 52% 43% 57% 48%",
    radiusB: "56% 44% 46% 54% / 37% 59% 41% 63%",
    offsetX: "9px",
    offsetY: "4px",
    rotateA: "24deg",
    rotateB: "-16deg",
    shadowA:
      "8px 2px 0 2px var(--button-hero-hover), -6px -6px 0 1px var(--button-hero-hover), -4px 7px 0 0 var(--button-hero-hover)",
    shadowB:
      "-8px 3px 0 1px var(--button-hero-hover), 4px -6px 0 0 var(--button-hero-hover)",
  },
  {
    radiusA: "61% 39% 44% 56% / 46% 54% 36% 64%",
    radiusB: "42% 58% 61% 39% / 58% 42% 63% 37%",
    offsetX: "-8px",
    offsetY: "-4px",
    rotateA: "-26deg",
    rotateB: "19deg",
    shadowA:
      "-8px 2px 0 2px var(--button-hero-hover), 5px -6px 0 1px var(--button-hero-hover), 6px 6px 0 0 var(--button-hero-hover)",
    shadowB:
      "8px 4px 0 1px var(--button-hero-hover), -4px -6px 0 0 var(--button-hero-hover)",
  },
];

export interface NaviButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  state?: "default" | "hover";
}

export default function NaviButton({
  children,
  className,
  state = "default",
  onPointerEnter,
  onPointerLeave,
  onFocus,
  onBlur,
  ...props
}: NaviButtonProps) {
  const isHover = state === "hover";
  const [hoverState, setHoverState] = useState<"idle" | "fill">(
    isHover ? "fill" : "idle",
  );
  const [hoverOrigin, setHoverOrigin] = useState({ x: "50%", y: "50%" });
  const [blobVariantIndex, setBlobVariantIndex] = useState(0);
  const blobVariant = blobVariants[blobVariantIndex];

  const updateHoverOrigin = (
    event: Parameters<PointerEventHandler<HTMLAnchorElement>>[0],
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setHoverOrigin({
      x: `${x}px`,
      y: `${y}px`,
    });
  };

  const handlePointerEnter: PointerEventHandler<HTMLAnchorElement> = (event) => {
    updateHoverOrigin(event);
    setBlobVariantIndex((currentIndex) => {
      const nextIndex = Math.floor(Math.random() * blobVariants.length);

      return nextIndex === currentIndex
        ? (nextIndex + 1) % blobVariants.length
        : nextIndex;
    });
    setHoverState("fill");
    onPointerEnter?.(event);
  };

  const handlePointerLeave: PointerEventHandler<HTMLAnchorElement> = (event) => {
    setHoverState(isHover ? "fill" : "idle");
    onPointerLeave?.(event);
  };

  return (
    <a
      {...props}
      className={[
        "navi-button inline-flex shrink-0 flex-col items-start justify-center whitespace-nowrap rounded-[var(--pill)] px-[var(--base-4)] py-[var(--base-4)] no-underline",
        isHover
          ? "text-[var(--button-hero-text)]"
          : "text-[var(--text-primary)]",
        "hover:text-[var(--button-hero-text)] focus-visible:text-[var(--button-hero-text)]",
        "transition-colors duration-[150ms] ease-in focus-visible:outline-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-hover={hoverState}
      data-state={state}
      onBlur={(event) => {
        setHoverState(isHover ? "fill" : "idle");
        onBlur?.(event);
      }}
      onFocus={(event) => {
        setHoverOrigin({ x: "50%", y: "50%" });
        setBlobVariantIndex(
          (currentIndex) => (currentIndex + 1) % blobVariants.length,
        );
        setHoverState("fill");
        onFocus?.(event);
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        "--navi-hover-x": hoverOrigin.x,
        "--navi-hover-y": hoverOrigin.y,
        "--navi-blob-radius-a": blobVariant.radiusA,
        "--navi-blob-radius-b": blobVariant.radiusB,
        "--navi-blob-offset-x": blobVariant.offsetX,
        "--navi-blob-offset-y": blobVariant.offsetY,
        "--navi-blob-rotate-a": blobVariant.rotateA,
        "--navi-blob-rotate-b": blobVariant.rotateB,
        "--navi-blob-shadow-a": blobVariant.shadowA,
        "--navi-blob-shadow-b": blobVariant.shadowB,
        fontSize: tokens.typography.button.medium.fontSize,
        lineHeight: tokens.typography.button.medium.lineHeight,
        fontWeight: tokens.typography.button.medium.fontWeight,
        ...props.style,
      } as CSSProperties}
    >
      <span className="relative z-[1]">{children}</span>
    </a>
  );
}
