import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { authOptions } from "../auth/[...nextauth]";

const bodySchema = z.object({
  title: z.string(),
  content: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  const { id } = req.query;

  const result = bodySchema.safeParse(req.body);

  if (!result.success)
    return res.status(400).json({ statusCode: 400, error: "Bad request" });

  const { title, content } = result.data;

  if (req.method === "PATCH") {
    console.log(req.body);
    if (!session || !session.user?.email) {
      return res.status(401).json({ statusCode: 401, error: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    const note = await prisma.note.findFirst({
      where: {
        id: Number(id),
        userId: user?.id,
      },
    });

    if (!note) {
      return res.status(403).json({ statusCode: 403, error: "Forbidden" });
    }

    const data = await prisma.note.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });

    if (data) {
      return res.status(201).json({ data });
    }

    return res.status(400).json({ statusCode: 400, error: "Bad request" });
  }

  return res.status(200).json({ name: "hello" });
}
