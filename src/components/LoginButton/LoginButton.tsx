"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export const LoginButton = () => {
  return (
    <button
      type="button"
      onClick={() => void signIn("github")}
      className="inline-flex gap-3 items-center rounded text-base bg-blue-600 hover:bg-blue-800 text-white py-2 px-4"
    >
      Zaloguj się przez Githuba <FaGithub />
    </button>
  );
};
