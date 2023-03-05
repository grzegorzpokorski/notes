import { prisma } from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { NextRequest } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const POST = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  const result = bodySchema.safeParse(await request.json());

  if (!result.success) {
    return new Response(
      JSON.stringify({ statusCode: 400, error: "Bad request" }),
      { status: 400 },
    );
  }

  const { title, content } = result.data;

  if (!session || !session.user?.email) {
    return new Response(
      JSON.stringify({ statusCode: 401, error: "Unauthorized" }),
      {
        status: 401,
      },
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new Response(
      JSON.stringify({ statusCode: 400, error: "Bad request" }),
      {
        status: 400,
      },
    );
  }

  const data = await prisma.note.create({
    data: {
      title,
      content,
      userId: user.id,
    },
  });

  if (data) {
    return new Response(JSON.stringify({ data }), {
      status: 201,
    });
  }

  return new Response(
    JSON.stringify({ statusCode: 400, error: "Bad request" }),
    {
      status: 400,
    },
  );
};
