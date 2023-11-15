import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APICient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

// React query implementation
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
