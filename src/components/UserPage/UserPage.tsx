"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { NoteList } from "../NoteList/NoteList";

export const UserPage = () => {
  const { data: sesstion, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  if (status === "loading") {
    return <p className="text-red-500">loading</p>;
  }

  if (status === "authenticated") {
    return <NoteList />;
  }

  return null;
};
