import { ReactNode } from "react";
import { UIProvider } from "@/providers/UIProvider";
import { Header } from "@/components/Header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <UIProvider>
      <Header />
      <main className="pb-16 md:pb-0 md:pt-16">{children}</main>
    </UIProvider>
  );
}
