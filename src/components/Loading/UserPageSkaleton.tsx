import { AddNewNoteFormSkeleton } from "@/components/Loading/AddNewNoteFormSkeleton";
import { NotesListSkeleton } from "@/components/Loading/NotesListSkeleton";

export const UserPageSkeleton = () => (
  <div className="flex flex-col mt-6 gap-6" role="status">
    <AddNewNoteFormSkeleton />
    <NotesListSkeleton />
  </div>
);
