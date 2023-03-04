import { fetchQuery } from "@/lib/fetchQuery";
import { noteSchema } from "@/utlis/schemas";
import { Note } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import { Button } from "../Button/Button";

export const NoteItem = ({
  note,
  refetchNotes,
}: {
  note: Note;
  refetchNotes: () => void;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({
    title: note.title,
    content: note.content,
  });

  const resetData = useCallback(
    () => setData({ title: note.title, content: note.content }),
    [note.content, note.title],
  );

  const deleteNote = useMutation({
    mutationFn: async (id: number) => {
      const x = await fetchQuery({
        url: `http://localhost:3000/api/note/${id}`,
        method: "DELETE",
        schema: noteSchema,
      });
      console.log(x);
    },
    onSuccess: () => refetchNotes(),
  });

  return (
    <li className="py-6 flex flex-col md:flex-row gap-6">
      <article className="w-full flex flex-col gap-2">
        {isEdit ? (
          <>
            <input
              value={data.title}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
            <textarea
              value={data.content}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, content: e.target.value };
                })
              }
            ></textarea>
          </>
        ) : (
          <>
            <h3 className="font-medium text-md">
              {/* {note.id} */}
              {note.title}
            </h3>
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
              variant="green"
              onClick={() => {
                const confirmation = confirm(
                  `Potwierdzasz usunięcie notatki o id: ${note.id}?`,
                );

                if (confirmation) {
                  deleteNote.mutate(note.id);
                }
              }}
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
              variant="red"
              onClick={() => {
                const confirmation = confirm(
                  `Potwierdzasz usunięcie notatki o id: ${note.id}?`,
                );

                if (confirmation) {
                  deleteNote.mutate(note.id);
                }
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
