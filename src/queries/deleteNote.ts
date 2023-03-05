import { fetchQuery } from "@/lib/fetchQuery";
import { noteSchema } from "@/utlis/schemas";

export const deleteNote = () => async (id: number) => {
  return await fetchQuery({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/note/${id}`,
    method: "DELETE",
    schema: noteSchema,
  });
};
