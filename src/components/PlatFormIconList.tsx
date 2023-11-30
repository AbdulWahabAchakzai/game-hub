import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import Platform from "../entities/Platform";

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
