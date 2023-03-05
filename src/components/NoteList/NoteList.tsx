import { Note } from "@prisma/client";
import { NoteItem } from "../NoteItem/NoteItem";

type NoteListProps = {
  notes: Note[];
  refetchNotes: () => void;
};

export const NoteList = ({ notes, refetchNotes }: NoteListProps) => {
  return (
    <ul className="list-none divide-y-2" role="list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} refetchNotes={refetchNotes} />
      ))}
    </ul>
  );
};
