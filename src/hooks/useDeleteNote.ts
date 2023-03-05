import { deleteNote } from "@/queries/deleteNote";
import { useMutation } from "@tanstack/react-query";

export const useDeleteNote = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: deleteNote(),
    onSuccess: onSuccess,
  });
};
