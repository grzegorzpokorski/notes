import { FormEvent, useState } from "react";
import { z } from "zod";
import { useCreateNote } from "@/hooks/useCreateNote";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { useUIContext } from "@/providers/UIProvider";
import { useOnKeydown } from "@/hooks/useOnKeydown";

type AddNewNoteModalProps = {
  refetchNotes: () => void;
};

export const AddNewNoteModal = ({ refetchNotes }: AddNewNoteModalProps) => {
  const { closeModal } = useUIContext();
  const { mutate, isLoading } = useCreateNote({
    onSuccess: () => {
      refetchNotes();
      closeModal();
    },
  });

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

  useOnKeydown("Escape", closeModal);

  return (
    <div
      id="modal"
      role="dialog"
      className="fixed top-0 left-0 z-50 p-3 h-full w-full overflow-y-auto bg-black/50"
      aria-modal={true}
      aria-labelledby="modal-title"
      onClick={closeModal}
    >
      <div className="m-auto flex min-h-full w-fit items-center">
        <form
          className="relative flex flex-col p-6 mx-auto max-w-md bg-white rounded-md overflow-auto"
          onSubmit={handleCreateNote}
          onClick={(e) => e.stopPropagation()}
        >
          <h2
            className="text-lg font-bold text-zinc-800 border-b-2 text-center pb-6 mb-6"
            id="modal-title"
          >
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
            <Button buttonType="submit" disabled={isDisabled}>
              {isLoading ? (
                <>
                  Zapisywanie <FaSpinner className="animate-spin" />
                </>
              ) : (
                "Dodaj"
              )}
            </Button>
          </div>
          <button
            type="button"
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-transparent hover:bg-blue-500 focus:bg-blue-500 text-gray-700 hover:text-white focus:text-white rounded-md transition-colors"
            onClick={closeModal}
          >
            <span className="sr-only">zamnij modal</span>
            <FaPlus className="rotate-45" />
          </button>
        </form>
      </div>
    </div>
  );
};
