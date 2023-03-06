import { useCallback, useState } from "react";
import { Note } from "@prisma/client";
import { useDeleteNote } from "@/hooks/useDeleteNote";
import { useUpdateNote } from "@/hooks/useUpdateNote";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";
import { Button } from "@/components/Button/Button";
import { NoteItemSkaleton } from "@/components/Loading/NoteItemSkeleton";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";

type NoteItemProps = {
  note: Note;
  refetchNotes: () => void;
};

export const NoteItem = ({ note, refetchNotes }: NoteItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({
    title: note.title,
    content: note.content,
  });

  const resetData = useCallback(
    () => setData({ title: note.title, content: note.content }),
    [note.content, note.title],
  );

  const deleteNote = useDeleteNote({ onSuccess: refetchNotes });
  const updateNote = useUpdateNote({ onSuccess: refetchNotes });

  const onEdit = () => setIsEdit(true);
  const onDelete = () => {
    deleteNote.mutate(note.id);
  };
  const onSave = () => {
    updateNote.mutate({
      id: note.id,
      content: data.content,
      title: data.title,
    });
    setIsEdit(false);
  };
  const onCancel = useCallback(() => {
    setIsEdit(false);
    resetData();
  }, [resetData]);

  const isSaveButtonDisabled =
    (data.title === note.title && data.content === note.content) ||
    data.content.length === 0 ||
    data.title.length === 0;

  if (deleteNote.isLoading || updateNote.isLoading) return <NoteItemSkaleton />;

  return (
    <li className="flex flex-col md:flex-row gap-3 md:gap-6 p-6 bg-white rounded-md drop-shadow">
      <article className="w-full flex flex-col gap-2">
        {isEdit ? (
          <>
            <Input
              label="Tytuł notatki"
              name="title"
              value={data.title}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
            <Textarea
              label="Treść notatki"
              name="content"
              value={data.content}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, content: e.target.value };
                })
              }
            />
          </>
        ) : (
          <>
            <h3 className="font-bold text-md text-gray-800">{note.title}</h3>
            <p className="text-gray-600 text-base">{note.content}</p>
          </>
        )}
      </article>
      <div className="flex flex-row md:flex-col gap-2">
        {isEdit ? (
          <>
            <Button
              label={
                <>
                  zapisz <FaSave />
                </>
              }
              color="green"
              onClick={onSave}
              disabled={isSaveButtonDisabled}
            />
            <Button
              label={
                <>
                  anuluj <FaPlus className="rotate-45" />
                </>
              }
              onClick={onCancel}
            />
          </>
        ) : (
          <>
            <Button
              label={
                <>
                  usuń <FaTrash />
                </>
              }
              color="red"
              onClick={onDelete}
            />
            <Button
              label={
                <>
                  edytuj <FaEdit />
                </>
              }
              onClick={onEdit}
            />
          </>
        )}
      </div>
    </li>
  );
};
