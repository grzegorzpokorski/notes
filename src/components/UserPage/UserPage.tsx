"use client";

import { useCallback } from "react";
import { useGetNotes } from "@/hooks/useGetNotes";
import { parseNotes } from "@/utlis/parseNotes";
import { AddNewNoteForm } from "@/components/AddNewNoteForm/AddNewNoteForm";
import { AddNewNoteFormSkeleton } from "@/components/Loading/AddNewNoteFormSkeleton";
import { NotesListHeaderSkeleton } from "@/components/Loading/NotesListHeaderSkeleton";
import { NotesListSkeleton } from "@/components/Loading/NotesListSkeleton";
import { NoteList } from "@/components/NoteList/NoteList";
import { NoteListHeader } from "@/components/NoteListHeader/NoteListHeader";

export const UserPage = () => {
  const { data, isSuccess, isLoading, refetch, isRefetching } = useGetNotes();

  const refetchNotes = useCallback(() => {
    void refetch();
  }, [refetch]);

  if (isLoading) {
    return (
      <>
        <AddNewNoteFormSkeleton />
        <NotesListHeaderSkeleton />
        <NotesListSkeleton />
      </>
    );
  }

  return (
    <section>
      <AddNewNoteForm refetchNotes={refetchNotes} />
      {isSuccess && data.data.length === 0 && (
        <NoteListHeader content="Nie masz notatek" />
      )}
      {isSuccess && data.data.length > 0 && (
        <>
          {isRefetching ? (
            <>
              <NotesListHeaderSkeleton />
              <NotesListSkeleton />
            </>
          ) : (
            <>
              <NoteListHeader content={`Twoje notatki (${data.data.length})`} />
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
