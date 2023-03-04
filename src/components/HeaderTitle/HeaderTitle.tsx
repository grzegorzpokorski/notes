"use client";

import { useSession } from "next-auth/react";

export const HeaderTitle = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>loading...</p>;

  if (session && session.user?.name) {
    return (
      <p>
        Witaj, <span className="font-medium">{session.user.name}</span>!
      </p>
    );
  }

  return <p>loading...</p>;
};
