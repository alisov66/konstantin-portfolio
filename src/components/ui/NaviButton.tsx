import type { AnchorHTMLAttributes, ReactNode } from "react";

import { tokens } from "@/styles/tokens";

export interface NaviButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export default function NaviButton({
  children,
  className,
  ...props
}: NaviButtonProps) {
  return (
    <a
      {...props}
      className={[
        "inline-flex shrink-0 items-start justify-center whitespace-nowrap rounded-[var(--pill)] px-[var(--base-4)] py-[var(--base-4)] text-[var(--text-primary)] no-underline",
        "hover:bg-[var(--button-primary)] hover:text-[var(--button-secondary-selected-text)]",
        "focus-visible:bg-[var(--button-primary)] focus-visible:text-[var(--button-secondary-selected-text)] focus-visible:outline-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
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
