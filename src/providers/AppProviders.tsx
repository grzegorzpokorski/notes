"use client";

import { ReactNode } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);
