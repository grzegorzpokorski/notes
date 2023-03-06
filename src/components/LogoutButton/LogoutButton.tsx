"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/Button/Button";
import { FaPowerOff } from "react-icons/fa";

export const LogoutButton = () => {
  const { status } = useSession();
  return (
    <Button
      onClick={() => void signOut()}
      size="large"
      disabled={status !== "authenticated"}
    >
      <span className="hidden md:inline" aria-hidden="true">
        Wyloguj się
      </span>{" "}
      <FaPowerOff />
      <span className="sr-only">Wyloguj się</span>
    </Button>
  );
};
