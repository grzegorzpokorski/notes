import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles =
  "inline-flex gap-1.5 justify-center items-center rounded text-base text-white py-1.5 px-3";
type Variants = "default" | "red" | "green";

const style = {
  default: twMerge("bg-blue-600 hover:bg-blue-800 text-sm"),
  red: twMerge("bg-red-500 hover:bg-red-700 text-sm"),
  green: twMerge("bg-green-500 hover:bg-green-700 text-sm"),
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
