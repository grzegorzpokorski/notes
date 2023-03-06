import { prisma } from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { NextRequest } from "next/server";
import { z } from "zod";

export const GET = async (
  request: Request,
  context: { params: { id: unknown } },
) => {
  const session = await getServerSession(authOptions);
  const id = context.params.id;

  if (typeof id !== "number") {
    return new Response(
      JSON.stringify({ statusCode: 400, error: "Bad request" }),
      { status: 400 },
    );
  }

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

  const data = await prisma.note.findFirst({
    where: {
      id,
      userId: user?.id,
    },
  });

  if (data) {
    return new Response(JSON.stringify({ data }), { status: 200 });
  }

  return new Response(JSON.stringify({ statusCode: 404, error: "Not found" }), {
    status: 404,
  });
};

export const DELETE = async (
  request: Request,
  context: { params: { id: unknown } },
) => {
  const session = await getServerSession(authOptions);
  const id = context.params.id;

  if (typeof id !== "number") {
    return new Response(
      JSON.stringify({ statusCode: 400, error: "Bad request" }),
      { status: 400 },
    );
  }

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

  const note = await prisma.note.findFirst({
    where: {
      id,
      userId: user?.id,
    },
  });

  if (!note) {
    return new Response(
      JSON.stringify({ statusCode: 403, error: "Forbidden" }),
      {
        status: 403,
      },
    );
  }

  const data = await prisma.note.delete({
    where: {
      id,
    },
  });

  if (data) {
    return new Response(JSON.stringify({ data }), { status: 200 });
  }

  return new Response(
    JSON.stringify({ statusCode: 400, error: "Bad request" }),
    {
      status: 400,
    },
  );
};

const bodySchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const PATCH = async (
  request: NextRequest,
  context: { params: { id: unknown } },
) => {
  const session = await getServerSession(authOptions);
  const id = context.params.id;

  if (typeof id !== "number") {
    return new Response(
      JSON.stringify({ statusCode: 400, error: "Bad request" }),
      { status: 400 },
    );
  }

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
      { status: 401 },
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const note = await prisma.note.findFirst({
    where: {
      id,
      userId: user?.id,
    },
  });

  if (!note) {
    return new Response(
      JSON.stringify({ statusCode: 403, error: "Forbidden" }),
      { status: 403 },
    );
  }

  const data = await prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });

  if (data) {
    return new Response(JSON.stringify({ data }), { status: 201 });
  }

  return new Response(
    JSON.stringify({ statusCode: 400, error: "Bad request" }),
    { status: 400 },
  );
};
