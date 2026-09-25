import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-black
    text-white
    hover:bg-neutral-800
  `,
  secondary: `
    border
    border-black/15
    bg-white
    text-black
    hover:bg-neutral-100
  `,
  ghost: `
    bg-transparent
    text-black
    hover:bg-black/5
  `,
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-5
    py-2.5
    text-sm
    font-medium
    tracking-[-0.01em]
    transition-all
    duration-300
    ease-out
    hover:-translate-y-0.5
    active:translate-y-0
    disabled:pointer-events-none
    disabled:opacity-50
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
