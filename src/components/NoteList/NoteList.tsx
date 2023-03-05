import { useGetNotes } from "@/hooks/useGetNotes";
import { useCallback } from "react";
import { AddNewNoteForm } from "../AddNewNoteForm/AddNewNoteForm";
import { AddNewNoteFormSkeleton } from "../Loading/AddNewNoteFormSkeleton";
import { NotesListHeaderSkeleton } from "../Loading/NotesListHeaderSkeleton";
import { NotesListSkeleton } from "../Loading/NotesListSkeleton";
import { NoteItem } from "../NoteItem/NoteItem";
import { NoteListHeader } from "../NoteListHeader/NoteListHeader";

export const NoteList = () => {
  const { data, isSuccess, isLoading, refetch, isRefetching } = useGetNotes();

  const refetchNotes = useCallback(() => {
    void refetch();
    console.log("refetch notes");
  }, [refetch]);

  if (isLoading)
    return (
      <>
        <AddNewNoteFormSkeleton />
        <NotesListHeaderSkeleton />
        <NotesListSkeleton />
      </>
    );

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
              <ul className="list-none divide-y-2" role="list">
                {data.data.map((note) => (
                  <NoteItem
                    key={note.id}
                    note={{
                      ...note,
                      createdAt: new Date(note.createdAt),
                      updatedAt: new Date(note.updatedAt),
                    }}
                    refetchNotes={refetchNotes}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </section>
  );
};
