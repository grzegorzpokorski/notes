import { fetchQuery } from "@/lib/fetchQuery";
import { notesSchema } from "@/utlis/schemas";
import { Note } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../Button/Button";

export const NoteItem = ({
  note,
  refetchNotes,
}: {
  note: Note;
  refetchNotes: () => void;
}) => {
  const deleteNote = useMutation({
    mutationFn: async (id: number) =>
      await fetch(`http://localhost:3000/api/note/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => refetchNotes(),
  });

  return (
    <li className="py-6 flex flex-col md:flex-row gap-6">
      <article className="w-full flex flex-col gap-2">
        <h3 className="font-medium text-md">
          {note.id}
          {note.title}
        </h3>
        <p>{note.content}</p>
      </article>
      <div className="flex flex-row md:flex-col gap-2">
        <Button
          label={
            <>
              usuń <FaTrash />
            </>
          }
          variant="delete"
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
        />
      </div>
    </li>
  );
};
