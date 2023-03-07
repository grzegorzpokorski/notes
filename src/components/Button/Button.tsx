import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles =
  "inline-flex gap-1.5 justify-center items-center rounded text-white disabled:cursor-not-allowed transition-colors disabled:bg-gray-300 disabled:border-t-2 disabled:border-b-2 disabled:border-gray-300 border-b-4 active:border-b-0 active:border-t-4";
type Colors = "default" | "red" | "green" | "github";

type Type = "button" | "submit";

const colors = {
  default: twMerge("bg-blue-600 hover:bg-blue-700 border-blue-900"),
  red: twMerge("bg-red-500 hover:bg-red-700 border-red-900"),
  green: twMerge("bg-green-500 hover:bg-green-700 border-green-900"),
  github: twMerge("bg-zinc-700 hover:bg-zinc-800 border-zinc-900"),
} as const;

type Sizes = "default" | "large";
const sizes = {
  default: "py-1.5 px-3 text-sm",
  large: "py-2 px-4 text-base",
} as const;

type ButtonProps = {
  children: ReactNode;
  buttonType?: Type;
  color?: Colors;
  size?: Sizes;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
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
      {children}
    </button>
  );
};
