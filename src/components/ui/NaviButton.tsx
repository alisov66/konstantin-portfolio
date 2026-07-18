"use client";

import type {
  AnchorHTMLAttributes,
  CSSProperties,
  PointerEventHandler,
  ReactNode,
} from "react";
import { useRef, useState } from "react";

import { tokens } from "@/styles/tokens";

export interface NaviButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  state?: "default" | "hover";
}

type WaterState = {
  angle: string;
  driftX: string;
  driftY: string;
  radiusX: string;
  strength: string;
  x: string;
  y: string;
};

const defaultWaterState: WaterState = {
  angle: "0deg",
  driftX: "0px",
  driftY: "0px",
  radiusX: "150px",
  strength: "1",
  x: "50%",
  y: "50%",
};

export default function NaviButton({
  children,
  className,
  state = "default",
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onFocus,
  onBlur,
  ...props
}: NaviButtonProps) {
  const isHover = state === "hover";
  const [hoverState, setHoverState] = useState<"idle" | "open">(
    isHover ? "open" : "idle",
  );
  const [waterState, setWaterState] =
    useState<WaterState>(defaultWaterState);
  const previousPointRef = useRef<{ x: number; y: number } | null>(null);

  const updateWaterState = (
    event: Parameters<PointerEventHandler<HTMLAnchorElement>>[0],
    isEntry = false,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const previousPoint = previousPointRef.current;
    const fallbackX = x - rect.width / 2;
    const fallbackY = y - rect.height / 2;
    const movementX = previousPoint ? x - previousPoint.x : fallbackX;
    const movementY = previousPoint ? y - previousPoint.y : fallbackY;
    const distance = Math.hypot(movementX, movementY);
    const normalizedDistance = Math.min(distance / 28, 1);
    const angle = Math.atan2(movementY, movementX);
    const driftDistance = isEntry
      ? 4 + normalizedDistance * 8
      : 2 + normalizedDistance * 10;
    const driftX = Math.cos(angle) * driftDistance;
    const driftY = Math.sin(angle) * driftDistance;
    const strength = 1 + normalizedDistance * 0.42;

    previousPointRef.current = { x, y };
    setWaterState({
      angle: `${angle}rad`,
      driftX: `${driftX.toFixed(2)}px`,
      driftY: `${driftY.toFixed(2)}px`,
      radiusX: `${(150 * strength).toFixed(2)}px`,
      strength: `${strength}`,
      x: `${x}px`,
      y: `${y}px`,
    });
  };

  const handlePointerEnter: PointerEventHandler<HTMLAnchorElement> = (event) => {
    previousPointRef.current = null;
    updateWaterState(event, true);
    setHoverState("open");
    onPointerEnter?.(event);
  };

  const handlePointerMove: PointerEventHandler<HTMLAnchorElement> = (event) => {
    updateWaterState(event);
    onPointerMove?.(event);
  };

  const handlePointerLeave: PointerEventHandler<HTMLAnchorElement> = (event) => {
    previousPointRef.current = null;
    setHoverState(isHover ? "open" : "idle");
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
        setHoverState(isHover ? "open" : "idle");
        onBlur?.(event);
      }}
      onFocus={(event) => {
        setWaterState(defaultWaterState);
        setHoverState("open");
        onFocus?.(event);
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={
        {
          "--navi-water-angle": waterState.angle,
          "--navi-water-drift-x": waterState.driftX,
          "--navi-water-drift-y": waterState.driftY,
          "--navi-water-radius-open-x": waterState.radiusX,
          "--navi-water-strength": waterState.strength,
          "--navi-water-x": waterState.x,
          "--navi-water-y": waterState.y,
          fontSize: tokens.typography.button.medium.fontSize,
          lineHeight: tokens.typography.button.medium.lineHeight,
          fontWeight: tokens.typography.button.medium.fontWeight,
          ...props.style,
        } as CSSProperties
      }
    >
      <span aria-hidden="true" className="navi-button__surface" />
      <span aria-hidden="true" className="navi-button__wake" />
      <span className="relative z-[2]">{children}</span>
    </a>
  );
}
