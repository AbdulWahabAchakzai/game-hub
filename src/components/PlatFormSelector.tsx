import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatFrom from "../hooks/usePlaform";

interface Props {
  onSelectedPlatform: (platForm: Platform) => void;
  selectedPlatformId?: number;
}

export const PlatFormSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = usePlatFrom(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
