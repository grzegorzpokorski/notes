import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/queries/getNotes";

export const useGetNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
};
