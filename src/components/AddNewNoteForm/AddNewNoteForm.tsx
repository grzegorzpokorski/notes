import { useCreateNote } from "@/hooks/useCreateNote";
import { FormEvent, useState } from "react";
import { Button } from "@/components/Button/Button";
import { NoteListHeader } from "@/components/NoteListHeader/NoteListHeader";
import { z } from "zod";
import { FaSpinner } from "react-icons/fa";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";

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
    <section>
      <NoteListHeader content="Dodaj nową notatkę" as="h2" />
      <form className="flex flex-col py-6" onSubmit={handleCreateNote}>
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
    </section>
  );
};
