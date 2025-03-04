import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APICient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APICient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

// React query implementation
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
