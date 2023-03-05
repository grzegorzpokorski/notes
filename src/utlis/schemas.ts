import { z } from "zod";

const note = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  userId: z.string(),
});

export const notesSchema = z.object({
  data: z.array(note),
});

export const noteSchema = z.object({
  data: note,
});
