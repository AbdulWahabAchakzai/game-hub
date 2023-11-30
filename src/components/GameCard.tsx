import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import { PlatFormIconList } from "./PlatFormIconList";
import { CriticeScore } from "./CriticeScore";
import getCropedImageUrl from "../services/image-url";
import { Emoji } from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormIconList
            platForms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticeScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" whiteSpace="nowrap">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};
