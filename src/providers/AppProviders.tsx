"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <ReactQueryProvider>{children}</ReactQueryProvider>
  </SessionProvider>
);
