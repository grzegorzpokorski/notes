import "@/styles/global.css";

import { Rubik } from "next/font/google";
import type { ReactNode } from "react";
import { AppProviders } from "@/providers/AppProviders";

const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
  variable: "--font-rubik",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pl"
      className={`${rubik.variable} scrollbar-gutter-stable bg-gray-200`}
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
