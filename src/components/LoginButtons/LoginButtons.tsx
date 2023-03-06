"use client";

import { signIn, useSession } from "next-auth/react";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";
import { Button } from "../Button/Button";

export const LoginButtons = () => {
  const { status } = useSession();

  if (status !== "unauthenticated") {
    return (
      <span
        role="status"
        className="flex flex-row items-center justify-center gap-1"
      >
        Ładowanie <FaSpinner className="animate-spin" />
      </span>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={() => void signIn("github")}
        size="large"
        color="github"
        disabled={status !== "unauthenticated"}
      >
        Zaloguj się przez Githuba <FaGithub />
      </Button>
      <Button
        onClick={() => void signIn("google")}
        size="large"
        disabled={status !== "unauthenticated"}
      >
        Zaloguj się przez Google <FaGoogle />
      </Button>
    </div>
  );
};
