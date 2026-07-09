import { tokens } from "@/styles/tokens";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const buttonTypography = tokens.typography.button.medium;
  const variantStyles = {
    primary: {
      backgroundColor: tokens.colors.button.primary.default,
      color: tokens.colors.button.primary.text,
      borderColor: tokens.colors.border.primary,
      hoverBackgroundColor: tokens.colors.button.primary.hover,
    },
    secondary: {
      backgroundColor: tokens.colors.button.secondary.default,
      color: tokens.colors.button.secondary.text,
      borderColor: tokens.colors.border.primary,
      hoverBackgroundColor: tokens.colors.button.secondary.hover,
    },
  }[variant];

  return (
    <button
      className="inline-flex items-center justify-center border px-6 py-3 transition-colors"
      style={{
        backgroundColor: variantStyles.backgroundColor,
        color: variantStyles.color,
        borderColor: variantStyles.borderColor,
        borderRadius: tokens.radius.pill,
        fontSize: buttonTypography.fontSize,
        lineHeight: buttonTypography.lineHeight,
        fontWeight: buttonTypography.fontWeight,
      }}
    >
      {children}
    </button>
  );
}
