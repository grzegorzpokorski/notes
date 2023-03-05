import { useCreateNote } from "@/hooks/useCreateNote";
import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { NoteListHeader } from "../NoteListHeader/NoteListHeader";
import { z } from "zod";
import { FaSpinner } from "react-icons/fa";

export const AddNewNoteForm = ({
  refetchNotes,
}: {
  refetchNotes: () => void;
}) => {
  const { mutate, isLoading } = useCreateNote({ onSuccess: refetchNotes });

  const [note, setNote] = useState<{
    title: string | null;
    content: string | null;
  }>({
    title: null,
    content: null,
  });

  const handleCreateNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataSchema = z.object({
      title: z.string().min(1),
      content: z.string().min(1),
    });

    const result = dataSchema.parse(note);

    if (isDisabled || !result) {
      return;
    }

    mutate({ title: result.title, content: result.content });
    setNote({ title: null, content: null });
  };

  const isDisabled = note.content === null || note.title === null;

  return (
    <section>
      <NoteListHeader content="Dodaj nową notatkę" as="h2" />
      <form className="flex flex-col py-6" onSubmit={handleCreateNote}>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Tytuł notatki
            </label>
            <input
              name="title"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="grid-title"
              type="text"
              onChange={(e) => {
                setNote((prev) => ({ ...prev, title: e.target.value }));
              }}
              value={note.title || ""}
            />
          </div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Treść notatki
            </label>
            <textarea
              name="content"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="grid-title"
              onChange={(e) => {
                setNote((prev) => ({ ...prev, content: e.target.value }));
              }}
              value={note.content || ""}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center">
          <Button
            label={
              isLoading ? (
                <>
                  Zapisywanie <FaSpinner className="animate-spin" />
                </>
              ) : (
                "Dodaj"
              )
            }
            buttonType="submit"
            disabled={isDisabled}
          />
        </div>
      </form>
    </section>
  );
};
