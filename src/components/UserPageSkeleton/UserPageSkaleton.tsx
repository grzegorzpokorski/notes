import { AddNewNoteFormSkeleton } from "@/components/Loading/AddNewNoteFormSkeleton";
import { NotesListHeaderSkeleton } from "@/components/Loading/NotesListHeaderSkeleton";
import { NotesListSkeleton } from "@/components/Loading/NotesListSkeleton";

export const UserPageSkeleton = () => (
  <>
    <AddNewNoteFormSkeleton />
    <NotesListHeaderSkeleton />
    <NotesListSkeleton />
  </>
);
