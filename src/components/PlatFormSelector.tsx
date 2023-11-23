import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatFrom from "../hooks/usePlaform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

export const PlatFormSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatfromId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatFrom(selectedPlatfromId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
