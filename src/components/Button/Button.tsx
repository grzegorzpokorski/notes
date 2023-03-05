import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles =
  "inline-flex gap-1.5 justify-center items-center rounded text-white disabled:cursor-not-allowed";
type Colors = "default" | "red" | "green";

type Type = "button" | "submit";

const colors = {
  default: twMerge("bg-blue-600 hover:bg-blue-800 disabled:bg-blue-400"),
  red: twMerge("bg-red-500 hover:bg-red-700 disabled:bg-red-400"),
  green: twMerge("bg-green-500 hover:bg-green-700 disabled:bg-green-400"),
} as const;

type Sizes = "default" | "large";
const sizes = {
  default: "py-1.5 px-3 text-sm",
  large: "py-2 px-4 text-base",
} as const;

type ButtonProps = {
  label: ReactNode;
  buttonType?: Type;
  color?: Colors;
  size?: Sizes;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  label,
  buttonType = "button",
  color = "default",
  size = "default",
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={buttonType}
      className={twMerge(defaultStyles, colors[color], sizes[size])}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
