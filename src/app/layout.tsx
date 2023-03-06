import "@/styles/global.css";

import { Rubik } from "next/font/google";
import type { ReactNode } from "react";
import { AppProviders } from "@/providers/AppProviders";

const rubik = Rubik({
  variable: "--font-rubik",
});

export const metadata = {
  title: { default: "Notes", template: "Notes | %s" },
};

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
