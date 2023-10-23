
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// Accessing genres by RAWG API.
// const useGeneres = () => useData('/genres')

// Accessing genres from static data to enhance application performance.
const useGeneres = () => ({ data: genres, isLoading: false, error: null })


export default useGeneres;



