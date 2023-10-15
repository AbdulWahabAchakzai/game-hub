import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
	return (
		<Card width="300px" borderRadius={10} overflow="hidden">
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};
