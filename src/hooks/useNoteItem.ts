import { ChangeEvent, useCallback, useState } from "react";
import { Note } from "@prisma/client";
import { useDeleteNote } from "./useDeleteNote";
import { useUpdateNote } from "./useUpdateNote";

type UseNoteItemArgs = {
  note: Note;
  onSuccess: () => void;
};

export const useNoteItem = ({ note, onSuccess }: UseNoteItemArgs) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState({
    title: note.title,
    content: note.content,
  });
  const deleteNote = useDeleteNote({ onSuccess });
  const updateNote = useUpdateNote({ onSuccess });

  const enableEditMode = useCallback(() => setIsEdit(true), []);
  const disableEditMode = useCallback(() => setIsEdit(false), []);

  const setEditedNote = useCallback(
    ({ title, content }: { title: string; content: string }) => {
      setNewData({ title, content });
    },
    [],
  );

  const resetData = () =>
    setNewData({ title: note.title, content: note.content });

  const onCancel = () => {
    disableEditMode();
    resetData();
  };

  const onDelete = () => {
    deleteNote.mutate(note.id);
  };

  const onSave = () => {
    updateNote.mutate({
      id: note.id,
      content: newData.content,
      title: newData.title,
    });
    disableEditMode();
  };

  const isLoading = deleteNote.isLoading || updateNote.isLoading;
  const isSaveButtonDisabled =
    (newData.title === note.title && newData.content === note.content) ||
    newData.content.length === 0 ||
    newData.title.length === 0;

  return {
    isEdit,
    enableEditMode,
    disableEditMode,
    setEditedNote,
    editedNote: newData,
    onCancel,
    onDelete,
    onSave,
    isLoading,
    isSaveButtonDisabled,
  };
};
