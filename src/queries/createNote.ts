import { fetchQuery } from "@/lib/fetchQuery";
import { noteSchema } from "@/utlis/schemas";

export const createNote = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) =>
  await fetchQuery({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/note`,
    method: "POST",
    body: { title, content },
    schema: noteSchema,
  });
