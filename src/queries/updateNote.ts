import { fetchQuery } from "@/lib/fetchQuery";
import { noteSchema } from "@/utlis/schemas";

export const updateNote = () => {
  return async ({
    id,
    title,
    content,
  }: {
    id: number;
    title: string;
    content: string;
  }) => {
    return await fetchQuery({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/note/${id}`,
      method: "PATCH",
      schema: noteSchema,
      body: { title, content },
    });
  };
};
