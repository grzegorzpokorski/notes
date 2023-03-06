"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoginButtons } from "@/components/LoginButtons/LoginButtons";

export const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user");
    }
  }, [router, status]);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-sm w-full m-auto">
        <header className="flex flex-col gap-6 text-center bg-white rounded-md py-16 px-6 drop-shadow m-6">
          <div>
            <h1 className="text-3xl font-bold">Notes</h1>
            <p>Miejsce na Twoje notatki</p>
          </div>
          <LoginButtons />
        </header>
      </div>
    </main>
  );
};
