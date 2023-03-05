import { Note } from "@prisma/client";

export const parseNotes = (
  notes: {
    title: string;
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
  }[],
): Note[] => {
  return notes.map((note) => ({
    ...note,
    createdAt: new Date(note.createdAt),
    updatedAt: new Date(note.updatedAt),
  }));
};
