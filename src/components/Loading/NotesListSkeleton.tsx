import { twMerge } from "tailwind-merge";
import { NoteItemSkaleton } from "./NoteItemSkeleton";

export const NotesListSkeleton = ({ className }: { className?: string }) => (
  <div
    role="status"
    className={twMerge("flex flex-col gap-6 mb-6 mt-12", className)}
  >
    {[...Array(6).keys()].map((i) => (
      <NoteItemSkaleton key={i} i={i} />
    ))}
  </div>
);
