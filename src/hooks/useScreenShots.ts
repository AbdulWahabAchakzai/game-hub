import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const apiClient = new APICient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["Screenshot", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
