"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export const UserImage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated" && session.user?.image) {
    return (
      <div className="relative aspect-square h-auto w-11 my-auto">
        <Image
          src={session.user.image}
          alt={`${session.user.name} awatar`}
          className="rounded"
          fill
        />
      </div>
    );
  }

  return null;
};
