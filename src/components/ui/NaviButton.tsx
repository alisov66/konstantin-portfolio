import type { AnchorHTMLAttributes, ReactNode } from "react";

import { tokens } from "@/styles/tokens";

export interface NaviButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  state?: "default" | "hover" | "active";
}

export default function NaviButton({
  children,
  className,
  state = "default",
  ...props
}: NaviButtonProps) {
  const isActive = state === "active";
  const isHover = state === "hover";

  return (
    <a
      {...props}
      className={[
        "inline-flex shrink-0 flex-col items-start justify-center whitespace-nowrap rounded-[var(--pill)] px-[var(--base-4)] py-[var(--base-4)] no-underline",
        isActive
          ? "bg-[var(--button-hero-hover)] text-[var(--button-hero-text)]"
          : isHover
            ? "bg-[var(--button-hero)] text-[var(--button-hero-text)]"
            : "text-[var(--text-primary)]",
        isActive
          ? ""
          : "hover:bg-[var(--button-hero)] hover:text-[var(--button-hero-text)] focus-visible:bg-[var(--button-hero)] focus-visible:text-[var(--button-hero-text)]",
        "focus-visible:outline-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-state={state}
      style={{
        fontSize: tokens.typography.button.medium.fontSize,
        lineHeight: tokens.typography.button.medium.lineHeight,
        fontWeight: tokens.typography.button.medium.fontWeight,
        ...props.style,
      }}
    >
      {children}
    </a>
  );
}
