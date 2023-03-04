"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { NoteList } from "../NoteList/NoteList";

export const UserPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  if (status === "loading") {
    return <p>loading</p>;
  }

  if (status === "authenticated") {
    return <NoteList />;
  }

  return null;
};
