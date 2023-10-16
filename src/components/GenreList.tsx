import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";

export const GenreList = () => {
	const { data } = useData<Genre>("/genres");

	return (
		<ul>
			{data.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};
