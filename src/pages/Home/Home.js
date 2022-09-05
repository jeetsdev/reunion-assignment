import { useEffect, useState } from "react";
import { Filter, PropertyCard } from "../../components";
import { AiOutlineSearch } from "react-icons/ai";
import "./Home.css";
import { useFilter, usePropertyData } from "../../contexts";
import {
	debounceSearch as debounce,
	filterData,
	searchProperty,
} from "../../utils";

export const Home = () => {
	const { filterState } = useFilter();
	const { propertyData } = usePropertyData();
	const [finalPropertyData, setFinalPropertyData] = useState(propertyData);

	// Debouncing search here
	const search = (text) => {
		setFinalPropertyData(searchProperty(text, propertyData));
	};
	const searchInputHandler = debounce(search, 1000);

	useEffect(() => {
		setFinalPropertyData(filterData(filterState, propertyData));
	}, [filterState, propertyData]);

	return (
		<div className="container-home">
			<div className="home-title">
				<h1>Search Properties to rent</h1>
				<form
					className="home-search"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						type="text"
						onChange={(e) => searchInputHandler(e.target.value)}
						placeholder="Search by title, city or street"
					/>
					<span>
						<AiOutlineSearch />
					</span>
				</form>
			</div>
			<div className="home-filter">
				<Filter />
			</div>
			<p className="home-status">
				(Showing {finalPropertyData.length} properties out of{" "}
				{propertyData.length} properties)
			</p>
			{finalPropertyData?.length === 0 ? (
				<h3>No items found, Please clear search and filters.</h3>
			) : (
				<div className="properties-container">
					{finalPropertyData?.map((property) => {
						return (
							<PropertyCard
								property={property}
								key={property.id}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
