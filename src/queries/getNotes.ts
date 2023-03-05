import { fetchQuery } from "@/lib/fetchQuery";
import { notesSchema } from "@/utlis/schemas";

export const getNotes = async () => {
  return await fetchQuery({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`,
    method: "GET",
    schema: notesSchema,
  });
};
