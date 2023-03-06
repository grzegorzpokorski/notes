import { FormEvent, useState } from "react";
import { z } from "zod";
import { useCreateNote } from "@/hooks/useCreateNote";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";
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

  const isDisabled =
    note.content === null ||
    note.title === null ||
    note.title.length === 0 ||
    note.content.length === 0;

  return (
    <form
      className="flex flex-col p-6 bg-white rounded-md drop-shadow"
      onSubmit={handleCreateNote}
    >
      <h2 className="text-lg font-bold text-zinc-800 border-b-2 text-center pb-6 mb-6">
        Dodaj nową notatkę
      </h2>
      <div className="flex flex-wrap">
        <Input
          label="Tytuł notatki"
          value={note.title || ""}
          name="title"
          onChange={(e) => {
            setNote((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
        <Textarea
          label="Treść notatki"
          name="content"
          value={note.content || ""}
          onChange={(e) => {
            setNote((prev) => ({ ...prev, content: e.target.value }));
          }}
        />
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
  );
};
