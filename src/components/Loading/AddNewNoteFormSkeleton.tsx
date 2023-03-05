import { NotesListHeaderSkeleton } from "./NotesListHeaderSkeleton";

export const AddNewNoteFormSkeleton = () => (
  <>
    <NotesListHeaderSkeleton />
    <form className="flex flex-col py-6 animate-pulse" role="status">
      <div className="flex flex-wrap -mx-3 gap-1">
        <div className="w-full px-3">
          <div className="h-4 w-32 rounded mb-2 bg-zinc-200"></div>
          <div className="h-11 w-full rounded mb-2 bg-zinc-200"></div>
        </div>
        <div className="w-full px-3">
          <div className="h-4 w-32 rounded mb-2 bg-zinc-200"></div>
          <div className="h-16 w-full rounded mb-2 bg-zinc-200"></div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center mt-1">
        <div className="w-full h-8 bg-zinc-200 rounded"></div>
      </div>
    </form>
  </>
);
