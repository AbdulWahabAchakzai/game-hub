import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  console.log("SLUG:::", slug);

  const { data: game, isLoading, error } = useGame(slug!); // by appending ! to slug constant we are telling the typescript compiler that this constant will never be null

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
