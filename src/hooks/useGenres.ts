import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Accessing genres by RAWG API.
// const useGeneres = () => useData('/genres')

// Accessing genres from static data to enhance application performance.
// const useGeneres = () => ({ data: genres, isLoading: false, error: null })

// REACT QUERY IMPLEMENTATION
const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: { count: genres.length, results: genres },
  });

export default useGeneres;
