import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("mx-auto px-3 max-w-4xl", className)}>
      {children}
    </div>
  );
};
