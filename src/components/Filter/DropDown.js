import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useFilter } from "../../contexts";

export const DropDown = ({ title, options, name }) => {
	const [dropdownFlag, setDropdownFlag] = useState(false);
	const { filterState, filterDispatch } = useFilter();

	// Getting the current menu name
	const currentMenu = Object.keys(filterState).find(
		(ele) => ele === name.toLowerCase(),
	);

	const dropdownHandler = (event) => {
		setDropdownFlag((prev) => !prev);
	};

	// Label for each menu
	const getLabel = () => {
		return filterState[`${currentMenu}`].length === 0
			? name
			: filterState[`${currentMenu}`];
	};

	// Handling options click here
	const optionClickHandler = (option) => {
		filterDispatch({
			type: `SET_${currentMenu.toUpperCase()}`,
			payload: option,
		});
	};

	return (
		<div className="dropdown-container">
			<div className="dropdown-title">
				<p>{title}</p>
			</div>
			<div className="dropdown" onClick={dropdownHandler}>
				<p className="dropdown-label">{getLabel()}</p>
				<span>
					{dropdownFlag ? (
						<RiArrowDropUpLine />
					) : (
						<RiArrowDropDownLine />
					)}
				</span>
				<div
					className={`dropdown-options ${
						dropdownFlag && "dropdown-active"
					}`}
				>
					{options?.map((option) => {
						return (
							<p
								value={option}
								key={option}
								onClick={() => optionClickHandler(option)}
							>
								{option}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};
