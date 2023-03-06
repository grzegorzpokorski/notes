"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { AddNewNoteFormSkeleton } from "../Loading/AddNewNoteFormSkeleton";
import { NotesListSkeleton } from "../Loading/NotesListSkeleton";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  if (status !== "authenticated") {
    return (
      <div className="mt-6 gap-6" role="status">
        <AddNewNoteFormSkeleton />
        <NotesListSkeleton />
      </div>
    );
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return null;
};
