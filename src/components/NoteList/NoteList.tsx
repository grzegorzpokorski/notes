import { useGetNotes } from "@/hooks/useGetNotes";
import { Note } from "@prisma/client";
import { NoteItem } from "../NoteItem/NoteItem";

export const NoteList = ({
  notes,
  refetchNotes,
}: {
  notes: Note[];
  refetchNotes: () => void;
}) => {
  return (
    <ul className="list-none divide-y-2" role="list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} refetchNotes={refetchNotes} />
      ))}
    </ul>
  );
};
