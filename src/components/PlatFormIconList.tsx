import { IconType } from "react-icons";
import {
	FaWindows,
	FaLinux,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "./../hooks/useGames";

interface Props {
	platForms: Platform[];
}

export const PlatFormIconList = ({ platForms }: Props) => {
	const iconsMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		linux: FaLinux,
		mac: FaApple,
		xbox: FaXbox,
		nintendo: SiNintendo,
		max: FaApple,
		ios: MdPhoneIphone,
		web: BsGlobe,
		android: FaAndroid,
	};

	return (
		<HStack marginY={1}>
			{platForms.map((platform) => (
				<Icon key={platform.id} as={iconsMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
};
