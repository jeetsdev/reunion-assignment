import { useFilter } from "../../contexts";
import { DropDown } from "./DropDown";
import "./Filter.css";

export const Filter = () => {
	const { filterDispatch } = useFilter();

	const clearFilterHandler = () => {
		filterDispatch({ type: "CLEAR_FILTER" });
	};
	return (
		<div className="filter-container">
			<div>
				<DropDown
					title="Select Price"
					options={[
						"All",
						"$500 - $2500",
						"$2500 - $3500",
						"$3500 - $5000",
					]}
					name="Price"
				/>
				<DropDown
					title="Property Type"
					options={["All", "House", "Apartment"]}
					name="Type"
				/>
				<DropDown
					title="Choose Location"
					options={[
						"All",
						"New York, USA",
						"Banglore, India",
						"Dehradun, India",
					]}
					name="Location"
				/>
				<DropDown
					title="Number of Beds"
					options={["All", "1", "2", "3", "4", "6"]}
					name="Beds"
				/>
			</div>
			<button className="btn btn-secondary" onClick={clearFilterHandler}>
				Clear
			</button>
		</div>
	);
};
