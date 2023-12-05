import { useQuery } from "@tanstack/react-query";
import { getFindGameByTime } from "../api/games";

export const useGamesTimeQuery = (time: string) => {
  return useQuery({
    queryKey: ["gamesByTime"],
    queryFn: () => getFindGameByTime(time),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: 2,
  });
};
