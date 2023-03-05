"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AddNewNoteFormSkeleton } from "../Loading/AddNewNoteFormSkeleton";
import { NotesListHeaderSkeleton } from "../Loading/NotesListHeaderSkeleton";
import { NotesListSkeleton } from "../Loading/NotesListSkeleton";
import { NoteList } from "../NoteList/NoteList";

export const UserPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  if (status !== "authenticated") {
    return (
      <>
        <AddNewNoteFormSkeleton />
        <NotesListHeaderSkeleton />
        <NotesListSkeleton />
      </>
    );
  }

  if (status === "authenticated") {
    return <NoteList />;
  }

  return null;
};
