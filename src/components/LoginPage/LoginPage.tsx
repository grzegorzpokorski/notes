"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoginButton } from "@/components/LoginButton/LoginButton";

export const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user");
    }
  }, [router, status]);

  return (
    <main className="mx-auto flex max-w-[520px] min-h-screen flex-col items-center justify-center gap-6 p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Notes</h1>
        <p>Twoje miejsce na notatki</p>
      </header>
      <LoginButton />
    </main>
  );
};
