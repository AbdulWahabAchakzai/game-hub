import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

export const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeneres();

  if (error) return null;
  if (isLoading) return <Spinner color="red.500" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="md"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
