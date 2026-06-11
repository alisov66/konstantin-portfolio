import type { ButtonHTMLAttributes, CSSProperties } from "react";

import { tokens } from "@/styles/tokens";

type TabButtonStyle = CSSProperties &
  Record<`--tab-button-${string}`, string | number>;

export interface TabButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export default function TabButton({
  children,
  className,
  selected = false,
  type = "button",
  ...props
}: TabButtonProps) {
  const textColor = selected
    ? tokens.colors.button.secondary.selectedText
    : tokens.colors.button.secondary.text;

  const style = {
    "--tab-button-bg": selected
      ? tokens.colors.button.secondary.selected
      : tokens.colors.button.secondary.default,
    "--tab-button-hover-bg": selected
      ? tokens.colors.button.secondary.selected
      : tokens.colors.button.secondary.hover,
    "--tab-button-text": textColor,
    "--tab-button-radius": tokens.radius.pill,
    "--tab-button-padding-x": tokens.spacing.base[4],
    "--tab-button-padding-y": tokens.spacing.base[2],
    "--tab-button-font-size": `${tokens.typography.button.medium.fontSize}px`,
    "--tab-button-line-height": `${tokens.typography.button.medium.lineHeight}px`,
    "--tab-button-font-weight": tokens.typography.button.medium.fontWeight,
  } satisfies TabButtonStyle;

  return (
    <button
      {...props}
      aria-selected={selected}
      className={[
        "inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap",
        "rounded-[var(--tab-button-radius)] bg-[var(--tab-button-bg)] px-[var(--tab-button-padding-x)] py-[var(--tab-button-padding-y)]",
        "text-[length:var(--tab-button-font-size)] font-[var(--tab-button-font-weight)] leading-[var(--tab-button-line-height)] text-[var(--tab-button-text)]",
        "transition-colors hover:bg-[var(--tab-button-hover-bg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-selected={selected || undefined}
      role="tab"
      style={{ ...style, ...props.style }}
      type={type}
    >
      {children}
    </button>
  );
}
