import React from "react";
import { Filter, PropertyCard } from "../../components";
import propertyData from "../../data/data.json";
import { AiOutlineSearch } from "react-icons/ai";
import "./Home.css";
import { useFilter } from "../../contexts";
import { filterData } from "../../utils/filterData";

export const Home = () => {
	const { filterState } = useFilter();

	const filterdPropertyData = filterData(filterState, propertyData);
	return (
		<div className="container-home">
			<div className="home-title">
				<h1>Search Properties to rent</h1>
				<form action="">
					<input type="text" placeholder="Search with Search Bar" />
					<span>
						<AiOutlineSearch />
					</span>
				</form>
			</div>
			<div className="home-filter">
				<Filter />
			</div>
			<p className="home-status">
				(Showing {filterdPropertyData.length} properties out of{" "}
				{propertyData.length} properties)
			</p>
			{filterdPropertyData.length === 0 ? (
				<h3>
					No items found, Please clear filters.
				</h3>
			) : (
				<div className="home-properties">
					{filterdPropertyData?.map((property) => {
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
