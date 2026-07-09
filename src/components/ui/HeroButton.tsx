import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { tokens } from "@/styles/tokens";

type HeroButtonStyle = CSSProperties &
  Record<`--hero-button-${string}`, string | number>;

export interface HeroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected?: boolean;
}

export default function HeroButton({
  children,
  className,
  selected = false,
  style,
  type = "button",
  ...props
}: HeroButtonProps) {
  const heroButtonStyle = {
    "--hero-button-bg": selected
      ? tokens.colors.button.hero.hover
      : tokens.colors.button.hero.default,
    "--hero-button-hover-bg": tokens.colors.button.hero.hover,
    "--hero-button-text": tokens.colors.button.hero.text,
    "--hero-button-radius": tokens.radius.pill,
    "--hero-button-padding-x": tokens.spacing.base[6],
    "--hero-button-padding-y": tokens.spacing.base[4],
    "--hero-button-font-size": tokens.typography.heading.h5.fontSize,
    "--hero-button-line-height": tokens.typography.heading.h5.lineHeight,
    "--hero-button-font-weight": tokens.typography.heading.h5.fontWeight,
  } satisfies HeroButtonStyle;

  return (
    <button
      {...props}
      className={[
        "inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border border-[var(--border-primary)]",
        "rounded-[var(--hero-button-radius)] bg-[var(--hero-button-bg)] px-[var(--hero-button-padding-x)] py-[var(--hero-button-padding-y)]",
        "text-[length:var(--hero-button-font-size)] font-[var(--hero-button-font-weight)] leading-[var(--hero-button-line-height)] text-[var(--hero-button-text)]",
        "transition-[background-color,color,box-shadow,transform] duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-[var(--hero-button-hover-bg)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ...heroButtonStyle, ...style }}
      type={type}
    >
      {children}
    </button>
  );
}
