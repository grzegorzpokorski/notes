import { Note } from "@prisma/client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../Button/Button";

export const NoteItem = ({ note }: { note: Note }) => {
  return (
    <li className="py-6 flex flex-col md:flex-row gap-6">
      <article className="w-full flex flex-col gap-2">
        <h3 className="font-medium text-md">{note.title}</h3>
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
