import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles =
  "inline-flex gap-1.5 justify-center items-center rounded text-base text-white py-2 px-4";

type Variants = "default" | "delete";

const style = {
  default: twMerge("bg-blue-600 hover:bg-blue-800"),
  delete: twMerge("bg-red-500 hover:bg-red-700"),
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
