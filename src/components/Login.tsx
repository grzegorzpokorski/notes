"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  const { data: session, status } = useSession();

  const login = () => {
    void signIn();
  };

  const logout = () => {
    void signOut();
  };

  return (
    <div>
      {status === "authenticated" ? (
        <>
          <button
            className="bg-green-500 text-zinc-800 hover:bg-green-800"
            onClick={logout}
          >
            Wyloguj
          </button>
          <pre>
            {session.user?.email} {session.user?.name} {session.user?.image}
          </pre>
        </>
      ) : (
        <button
          className="bg-green-500 text-zinc-800 hover:bg-green-800"
          onClick={login}
        >
          Zaloguj
        </button>
      )}
    </div>
  );
};
