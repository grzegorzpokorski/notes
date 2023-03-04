import { fetchQuery } from "@/lib/fetchQuery";
import { productsShema } from "@/utlis/shemas";
import { useQuery } from "@tanstack/react-query";
import { Container } from "../Container/Container";
import { NoteItem } from "../NoteItem/NoteItem";

export const NoteList = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: async () =>
      await fetchQuery("http://localhost:3000/api/notes", "GET", productsShema),
  });

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
            />
          ))}
        </ul>
      )}
    </section>
  );
};
