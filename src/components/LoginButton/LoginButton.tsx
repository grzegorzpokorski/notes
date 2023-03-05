"use client";

import { signIn, useSession } from "next-auth/react";
import { FaGithub, FaSpinner } from "react-icons/fa";
import { Button } from "../Button/Button";

export const LoginButton = () => {
  const { status } = useSession();
  return (
    <Button
      onClick={() => void signIn("github")}
      size="large"
      disabled={status !== "unauthenticated"}
      label={
        status === "unauthenticated" ? (
          <>
            Zaloguj się przez Githuba <FaGithub />
          </>
        ) : (
          <>
            Ładowanie <FaSpinner className="animate-spin" />
          </>
        )
      }
    />
  );
};
