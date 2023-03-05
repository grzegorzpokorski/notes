import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles =
  "inline-flex gap-1.5 justify-center items-center rounded text-base text-white py-1.5 px-3 disabled:cursor-not-allowed";
type Variants = "default" | "red" | "green";

type buttonType = "button" | "submit";

const style = {
  default: twMerge(
    "bg-blue-600 hover:bg-blue-800 disabled:bg-blue-500 text-sm",
  ),
  red: twMerge("bg-red-500 hover:bg-red-700 disabled:bg-red-400 text-sm"),
  green: twMerge(
    "bg-green-500 hover:bg-green-700 disabled:bg-green-400 text-sm",
  ),
} as const;

type ButtonProps = {
  label: ReactNode;
  buttonType?: buttonType;
  variant?: Variants;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  label,
  buttonType = "button",
  variant = "default",
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={buttonType}
      className={twMerge(defaultStyles, style[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
