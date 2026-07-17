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

  const handlePointerEnter: PointerEventHandler<HTMLAnchorElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setHoverOrigin({
      x: `${event.clientX - rect.left}px`,
      y: `${event.clientY - rect.top}px`,
    });
    setHoverState("dot");
    startFill(100);
    onPointerEnter?.(event);
  };

  const handlePointerLeave: PointerEventHandler<HTMLAnchorElement> = (event) => {
    clearFillTimeout();
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
        setHoverState(isHover ? "fill" : "idle");
        onBlur?.(event);
      }}
      onFocus={(event) => {
        setHoverOrigin({ x: "50%", y: "50%" });
        setHoverState("fill");
        onFocus?.(event);
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        "--navi-hover-x": hoverOrigin.x,
        "--navi-hover-y": hoverOrigin.y,
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
