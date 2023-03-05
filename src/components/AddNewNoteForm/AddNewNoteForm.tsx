import { useCreateNote } from "@/hooks/useCreateNote";
import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { NoteListHeader } from "../NoteListHeader/NoteListHeader";
import { z } from "zod";

export const AddNewNoteForm = ({
  refetchNotes,
}: {
  refetchNotes: () => void;
}) => {
  const createNote = useCreateNote({ onSuccess: refetchNotes });

  const [data, setData] = useState<{
    title: string | null;
    content: string | null;
  }>({
    title: null,
    content: null,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataSchema = z.object({
      title: z.string().min(1),
      content: z.string().min(1),
    });

    const result = dataSchema.parse(data);

    if (isDisabled || !result) {
      return;
    }

    createNote.mutate({ title: result.title, content: result.content });
    setData({ title: null, content: null });
  };

  const isDisabled = data.content === null || data.title === null;

  return (
    <section>
      <NoteListHeader title="Dodaj nową notatkę" />
      <form className="flex flex-col py-6" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Tytuł notatki
            </label>
            <input
              name="title"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title"
              type="text"
              onChange={(e) => {
                setData((prev) => ({ ...prev, title: e.target.value }));
              }}
              value={data.title || ""}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Treść notatki
            </label>
            <textarea
              name="content"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title"
              onChange={(e) => {
                setData((prev) => ({ ...prev, content: e.target.value }));
              }}
              value={data.content || ""}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center">
          <Button label="Dodaj" buttonType="submit" disabled={isDisabled} />
          {createNote.isLoading && "saving..."}
        </div>
      </form>
    </section>
  );
};
