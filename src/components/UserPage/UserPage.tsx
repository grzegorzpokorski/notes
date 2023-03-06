"use client";

import { useCallback } from "react";
import { useGetNotes } from "@/hooks/useGetNotes";
import { parseNotes } from "@/utlis/parseNotes";
import { AddNewNoteForm } from "@/components/AddNewNoteForm/AddNewNoteForm";
import { AddNewNoteFormSkeleton } from "@/components/Loading/AddNewNoteFormSkeleton";
import { NotesListSkeleton } from "@/components/Loading/NotesListSkeleton";
import { NoteList } from "@/components/NoteList/NoteList";

export const UserPage = () => {
  const { data, isSuccess, isLoading, refetch, isRefetching } = useGetNotes();

  const refetchNotes = useCallback(() => {
    void refetch();
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="mt-6 gap-6" role="status">
        <AddNewNoteFormSkeleton />
        <NotesListSkeleton />
      </div>
    );
  }

  return (
    <section className="flex flex-col mt-6 gap-6">
      <AddNewNoteForm refetchNotes={refetchNotes} />
      {isSuccess && data.data.length > 0 && (
        <>
          {isRefetching ? (
            <NotesListSkeleton className="mt-6" />
          ) : (
            <>
              <NoteList
                notes={parseNotes(data.data)}
                refetchNotes={refetchNotes}
              />
            </>
          )}
        </>
      )}
    </section>
  );
};
