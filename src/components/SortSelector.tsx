import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Note" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];

	const currentOrder = sortOrders.find((order) => order.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				OrderBy: {currentOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
