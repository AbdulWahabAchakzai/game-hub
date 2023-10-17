import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGeneres();

	if (error) return null;
	if (isLoading) return <Spinner color="red.500" />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCropedImageUrl(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							fontSize="sm"
							variant="link"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};
