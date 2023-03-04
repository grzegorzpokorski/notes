import { z } from "zod";

export const productsShema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      content: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
    }),
  ),
});
