import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles = "inline-flex gap-3 items-center rounded text-base";

type Variants = "default";

const style = {
  default: twMerge("bg-blue-600 hover:bg-blue-800 text-white py-2 px-4"),
} as const;

type ButtonProps = {
  variant?: Variants;
  label: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  variant = "default",
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(defaultStyles, style[variant])}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
