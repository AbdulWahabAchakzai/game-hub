import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APICient<Game>("games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
