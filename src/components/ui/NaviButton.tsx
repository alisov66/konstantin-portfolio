"use client";

import type {
  AnchorHTMLAttributes,
  CSSProperties,
  PointerEventHandler,
  ReactNode,
} from "react";
import { useEffect, useRef, useState } from "react";

import { tokens } from "@/styles/tokens";

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
  onPointerMove,
  onFocus,
  onBlur,
  ...props
}: NaviButtonProps) {
  const isHover = state === "hover";
  const fillTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoverState, setHoverState] = useState<"idle" | "dot" | "fill">(
    isHover ? "fill" : "idle",
  );
  const [hoverOrigin, setHoverOrigin] = useState({ x: "50%", y: "50%" });
  const entryPointRef = useRef<{ x: number; y: number } | null>(null);
  const [hoverTrail, setHoverTrail] = useState({
    angle: "0deg",
    width: "16px",
    x: "50%",
    y: "50%",
  });

  const clearFillTimeout = () => {
    if (!fillTimeoutRef.current) {
      return;
    }

    clearTimeout(fillTimeoutRef.current);
    fillTimeoutRef.current = null;
  };

  const startFill = (delay: number) => {
    clearFillTimeout();
    fillTimeoutRef.current = setTimeout(() => {
      fillTimeoutRef.current = null;
      setHoverState("fill");
    }, delay);
  };

  const updateHoverOrigin = (
    event: Parameters<PointerEventHandler<HTMLAnchorElement>>[0],
    resetEntry = false,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (resetEntry || !entryPointRef.current) {
      entryPointRef.current = { x, y };
    }

    const entryPoint = entryPointRef.current;
    const deltaX = x - entryPoint.x;
    const deltaY = y - entryPoint.y;
    const distance = Math.hypot(deltaX, deltaY);
    const trailWidth = Math.max(16, distance + 16);

    setHoverOrigin({
      x: `${x}px`,
      y: `${y}px`,
    });
    setHoverTrail({
      angle: `${Math.atan2(deltaY, deltaX)}rad`,
      width: `${trailWidth}px`,
      x: `${entryPoint.x + deltaX / 2}px`,
      y: `${entryPoint.y + deltaY / 2}px`,
    });
  };

  const handlePointerEnter: PointerEventHandler<HTMLAnchorElement> = (event) => {
    updateHoverOrigin(event, true);
    setHoverState("dot");
    startFill(300);
    onPointerEnter?.(event);
  };

  const handlePointerMove: PointerEventHandler<HTMLAnchorElement> = (event) => {
    if (hoverState === "dot") {
      updateHoverOrigin(event);
    }

    onPointerMove?.(event);
  };

  const handlePointerLeave: PointerEventHandler<HTMLAnchorElement> = (event) => {
    clearFillTimeout();
    entryPointRef.current = null;
    setHoverState(isHover ? "fill" : "idle");
    onPointerLeave?.(event);
  };

  useEffect(() => {
    return clearFillTimeout;
  }, []);

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
        clearFillTimeout();
        entryPointRef.current = null;
        setHoverState(isHover ? "fill" : "idle");
        onBlur?.(event);
      }}
      onFocus={(event) => {
        entryPointRef.current = null;
        setHoverOrigin({ x: "50%", y: "50%" });
        setHoverTrail({
          angle: "0deg",
          width: "16px",
          x: "50%",
          y: "50%",
        });
        setHoverState("fill");
        onFocus?.(event);
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{
        "--navi-hover-x": hoverOrigin.x,
        "--navi-hover-y": hoverOrigin.y,
        "--navi-trail-angle": hoverTrail.angle,
        "--navi-trail-width": hoverTrail.width,
        "--navi-trail-x": hoverTrail.x,
        "--navi-trail-y": hoverTrail.y,
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
