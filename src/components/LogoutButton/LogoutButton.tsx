"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      type="button"
      onClick={() => void signOut()}
      className="inline-flex gap-3 items-center rounded text-base bg-blue-600 hover:bg-blue-800 text-white py-2 px-4"
    >
      Wyloguj się
    </button>
  );
};
