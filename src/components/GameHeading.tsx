import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeneres from "../hooks/useGenres";
import usePlatFrom from "../hooks/usePlaform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatFrom(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
