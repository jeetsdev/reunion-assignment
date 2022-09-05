import React from "react";
import { PropertyCard } from "../../components";
import { usePropertyData } from "../../contexts";
import "./Favorite.css"

export const Favorite = () => {
	const { propertyData } = usePropertyData();

	const favoritePropertyData = propertyData.filter((data) => data.favorite);
	return (
		<div className="container-fav">
			<h1>Your Favorite Properties</h1>
			{favoritePropertyData.length === 0 ? (
				<p>No Favorite Property</p>
			) : (
				<div className="properties-container">
					{favoritePropertyData.map((property) => {
						return <PropertyCard property={property} />;
					})}
				</div>
			)}
		</div>
	);
};
