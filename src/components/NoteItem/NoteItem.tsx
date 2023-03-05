import { useDeleteNote } from "@/hooks/useDeleteNote";
import { useUpdateNote } from "@/hooks/useUpdateNote";
import { Note } from "@prisma/client";
import { useCallback, useState } from "react";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { NoteItemSkaleton } from "@/components/Loading/NoteItemSkeleton";
import { Textarea } from "@/components/Textarea/Textarea";

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

  const isSaveButtonDisabled =
    (data.title === note.title && data.content === note.content) ||
    data.content.length === 0 ||
    data.title.length === 0;

  if (deleteNote.isLoading || updateNote.isLoading) return <NoteItemSkaleton />;

  return (
    <li className="py-6 flex flex-col md:flex-row gap-3 md:gap-6">
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
            <h3 className="font-medium text-md">{note.title}</h3>
            <p>{note.content}</p>
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
              onClick={() => {
                updateNote.mutate({
                  id: note.id,
                  content: data.content,
                  title: data.title,
                });
                setIsEdit(false);
              }}
              disabled={isSaveButtonDisabled}
            />
            <Button
              label={
                <>
                  anuluj <FaPlus className="rotate-45" />
                </>
              }
              onClick={() => {
                setIsEdit(false);
                resetData();
              }}
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
              onClick={() => {
                deleteNote.mutate(note.id);
              }}
            />
            <Button
              label={
                <>
                  edytuj <FaEdit />
                </>
              }
              onClick={() => setIsEdit(true)}
            />
          </>
        )}
      </div>
    </li>
  );
};
