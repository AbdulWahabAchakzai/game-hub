import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeneres from "../hooks/useGenres";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGeneres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
