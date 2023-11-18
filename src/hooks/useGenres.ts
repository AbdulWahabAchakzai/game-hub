import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APICient<Genre>("/genres");

// Accessing genres by RAWG API.
// const useGeneres = () => useData('/genres')

// Accessing genres from static data to enhance application performance.
// const useGeneres = () => ({ data: genres, isLoading: false, error: null })

// REACT QUERY IMPLEMENTATION
const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: genres,
  });

export default useGeneres;
