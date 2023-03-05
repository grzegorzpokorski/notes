import { NoteItemSkaleton } from "./NoteItemSkeleton";

export const NotesListSkeleton = () => (
  <div role="status" className="divide-y-2">
    {[...Array(6).keys()].map((i) => (
      <NoteItemSkaleton key={i} i={i} />
    ))}
  </div>
);
