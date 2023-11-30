import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!); // by appending ! to slug constant we are telling the typescript compiler that this constant will never be null

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
