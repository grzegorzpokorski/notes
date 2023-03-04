import { prisma } from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export const GET = async (
  request: Request,
  context: { params: { id: number } },
) => {
  const session = await getServerSession(authOptions);

  const id = Number(context.params.id);

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
  context: { params: { id: number } },
) => {
  const session = await getServerSession(authOptions);

  const id = Number(context.params.id);

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
      JSON.stringify({ statusCode: 404, error: "Not found" }),
      {
        status: 404,
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

  return new Response(JSON.stringify({ statusCode: 404, error: "Not found" }), {
    status: 404,
  });
};
