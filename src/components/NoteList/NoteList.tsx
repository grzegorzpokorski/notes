import { fetchQuery } from "@/lib/fetchQuery";
import { notesSchema } from "@/utlis/schemas";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { NoteItem } from "../NoteItem/NoteItem";

export const NoteList = () => {
  const { data, isSuccess, isLoading, refetch } = useQuery({
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

  if (isLoading) return <p>loading...</p>;

  return (
    <section>
      <header className="text-center py-6 border-b-2">
        <h2 className="text-xl font-medium">
          {isSuccess && data.data.length > 0
            ? "Twoje notatki"
            : "Nie masz notatek"}
        </h2>
      </header>
      {isSuccess && data.data.length > 0 && (
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
      )}
    </section>
  );
};
