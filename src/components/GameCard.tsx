import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatFormIconList } from "./PlatFormIconList";
import { CriticeScore } from "./CriticeScore";
import getCropedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

export const GameCard = ({ game }: Props) => {
	return (
		<Card width="300px" borderRadius={10} overflow="hidden">
			<Image src={getCropedImageUrl(game.background_image)} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatFormIconList
						platForms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticeScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};
