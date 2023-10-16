import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

export const GenreList = () => {
	const { data } = useData<Genre>("/genres");

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
						<Text>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};
