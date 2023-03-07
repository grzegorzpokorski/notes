"use client";

import { useCallback } from "react";
import { useGetNotes } from "@/hooks/useGetNotes";
import { parseNotes } from "@/utlis/parseNotes";
import { NotesListSkeleton } from "@/components/Loading/NotesListSkeleton";
import { NoteList } from "@/components/NoteList/NoteList";
import { AddNewNoteModal } from "../AddNewNoteModal/AddNewNoteModal";
import { useUIContext } from "@/providers/UIProvider";

export const UserPage = () => {
  const { data, isSuccess, isLoading, refetch, isRefetching } = useGetNotes();
  const { isModalOpen } = useUIContext();

  const refetchNotes = useCallback(() => {
    void refetch();
  }, [refetch]);

  if (isLoading || isRefetching) {
    return <NotesListSkeleton />;
  }

  return (
    <>
      <section className="flex flex-col gap-6">
        {isSuccess && data.data.length > 0 ? (
          <>
            <NoteList
              notes={parseNotes(data.data)}
              refetchNotes={refetchNotes}
            />
          </>
        ) : (
          <h2 className="text-center mt-6 uppercase text-sm font-bold text-gray-800">
            Nie masz notatek
          </h2>
        )}
      </section>
      {isModalOpen && <AddNewNoteModal refetchNotes={refetchNotes} />}
    </>
  );
};
