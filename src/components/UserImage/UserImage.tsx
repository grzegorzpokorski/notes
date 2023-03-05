"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export const UserImage = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated")
    return <div className="rounded w-10 h-10 bg-zinc-200" role="status"></div>;

  if (session.user?.image) {
    return (
      <Image
        src={session.user.image}
        alt={`${session.user.name} avatar`}
        width={40}
        height={40}
        className="rounded"
      />
    );
  }

  return null;
};
