import { prisma } from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return new Response(
      JSON.stringify({ statusCode: 401, error: "Unauthorized" }),
      {
        status: 401,
      },
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const data = await prisma.note.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: [
      {
        id: "desc",
      },
    ],
  });

  return NextResponse.json({ data });
};
