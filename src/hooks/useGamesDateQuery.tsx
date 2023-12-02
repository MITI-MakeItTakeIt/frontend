import { useQuery } from "@tanstack/react-query";
import { getFindGameByDate } from "../api/games";

export const useGamesDateQuery = (date: string) => {
  return useQuery({
    queryKey: ["gamesByDate", date],
    queryFn: () => getFindGameByDate(date),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: 2,
  });
};
