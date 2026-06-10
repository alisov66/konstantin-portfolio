type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[var(--button-primary)] text-[var(--button-primary-text)] hover:bg-[var(--button-primary-hover)]",

    secondary:
      "bg-[var(--button-secondary)] text-[var(--button-secondary-text)] hover:bg-[var(--button-secondary-hover)]",
  };

  return (
    <button
      className={`
        px-6 py-3
        transition-colors
        border border-[var(--border-primary)]
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}