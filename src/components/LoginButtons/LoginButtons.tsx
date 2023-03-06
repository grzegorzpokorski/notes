"use client";

import { signIn, useSession } from "next-auth/react";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";
import { Button } from "../Button/Button";

export const LoginButtons = () => {
  const { status } = useSession();

  if (status !== "unauthenticated") {
    return (
      <Button
        size="large"
        disabled={true}
        label={
          <>
            Ładowanie <FaSpinner className="animate-spin" />
          </>
        }
      />
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={() => void signIn("github")}
        size="large"
        color="github"
        disabled={status !== "unauthenticated"}
        label={
          <>
            Zaloguj się przez Githuba <FaGithub />
          </>
        }
      />
      <Button
        onClick={() => void signIn("google")}
        size="large"
        disabled={status !== "unauthenticated"}
        label={
          <>
            Zaloguj się przez Google <FaGoogle />
          </>
        }
      />
    </div>
  );
};
