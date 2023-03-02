"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt={`${session.user.name ? session.user.name : "user"} image`}
            width={40}
            height={40}
          />
        )}
        <button
          onClick={() => void signOut()}
          className="bg-zinc-600 text-white py-2 px-4 hover:bg-zinc-800"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => void signIn()}
        className="bg-zinc-600 text-white py-2 px-4 hover:bg-zinc-800"
      >
        Sign in
      </button>
    </>
  );
};
