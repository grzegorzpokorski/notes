import { useMutation } from "@tanstack/react-query";
import { updateNote } from "@/queries/updateNote";

export const useUpdateNote = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: updateNote(),
    onSuccess: () => onSuccess(),
  });
};
