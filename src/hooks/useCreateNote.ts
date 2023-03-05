import { useMutation } from "@tanstack/react-query";
import { createNote } from "@/queries/createNote";

export const useCreateNote = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: createNote,
    onSuccess: onSuccess,
  });
};
