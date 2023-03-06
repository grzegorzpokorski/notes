import { Note } from "@prisma/client";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";
import { Button } from "@/components/Button/Button";
import { NoteItemSkaleton } from "@/components/Loading/NoteItemSkeleton";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import { useNoteItem } from "@/hooks/useNoteItem";
import { NoteContent } from "./NoteContent/NoteContent";

type NoteItemProps = {
  note: Note;
  refetchNotes: () => void;
};

export const NoteItem = ({ note, refetchNotes }: NoteItemProps) => {
  const {
    isEdit,
    enableEditMode,
    setEditedNote,
    editedNote,
    onCancel,
    onDelete,
    onSave,
    isLoading,
    isSaveButtonDisabled,
  } = useNoteItem({
    note,
    onSuccess: refetchNotes,
  });

  if (isLoading) return <NoteItemSkaleton />;

  return (
    <li className="flex flex-col md:flex-row gap-3 md:gap-6 p-6 bg-white rounded-md drop-shadow">
      <article className="w-full flex flex-col gap-2">
        {isEdit ? (
          <>
            <Input
              label="Tytuł notatki"
              name="title"
              value={editedNote.title}
              onChange={(e) =>
                setEditedNote({ ...editedNote, title: e.target.value })
              }
            />
            <Textarea
              label="Treść notatki"
              name="content"
              value={editedNote.content}
              onChange={(e) =>
                setEditedNote({ ...editedNote, content: e.target.value })
              }
            />
          </>
        ) : (
          <NoteContent title={note.title} content={note.content} />
        )}
      </article>
      <div className="flex flex-row md:flex-col gap-2">
        {isEdit ? (
          <>
            <Button
              color="green"
              onClick={onSave}
              disabled={isSaveButtonDisabled}
            >
              zapisz <FaSave />
            </Button>
            <Button onClick={onCancel}>
              anuluj <FaPlus className="rotate-45" />
            </Button>
          </>
        ) : (
          <>
            <Button color="red" onClick={onDelete}>
              usuń <FaTrash />
            </Button>
            <Button onClick={enableEditMode}>
              edytuj <FaEdit />
            </Button>
          </>
        )}
      </div>
    </li>
  );
};
