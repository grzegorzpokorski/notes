import { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
    </>
  );
}
