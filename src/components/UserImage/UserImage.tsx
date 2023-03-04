"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export const UserImage = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  if (session.user?.image) {
    return (
      <div className="flex items-center">
        <Image
          src={session.user.image}
          alt={`${session.user.name} avatar`}
          width={40}
          height={40}
          className="rounded"
        />
      </div>
    );
  }

  return null;
};
