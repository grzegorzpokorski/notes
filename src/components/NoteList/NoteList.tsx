import { fetchQuery } from "@/lib/fetchQuery";
import { notesSchema } from "@/utlis/schemas";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { AddNewNoteForm } from "../AddNewNoteForm/AddNewNoteForm";
import { AddNewNoteFormSkeleton } from "../Loading/AddNewNoteFormSkeleton";
import { NotesListHeaderSkeleton } from "../Loading/NotesListHeaderSkeleton";
import { NotesListSkeleton } from "../Loading/NotesListSkeleton";
import { NoteItem } from "../NoteItem/NoteItem";
import { NoteListHeader } from "../NoteListHeader/NoteListHeader";

export const NoteList = () => {
  const { data, isSuccess, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["notes"],
    queryFn: async () =>
      await fetchQuery({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`,
        method: "GET",
        schema: notesSchema,
      }),
  });

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
        <NoteListHeader title="Nie masz notatek" />
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
              <NoteListHeader title={`Twoje notatki (${data.data.length})`} />
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
