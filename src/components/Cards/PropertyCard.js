import React from "react";
import "./PropertyCard.css";
import { FiHeart } from "react-icons/fi";
import { TbBoxMargin } from "react-icons/tb";
import { BiBed, BiBath } from "react-icons/bi";

export const PropertyCard = ({ property }) => {
	const getRent = (rent) => {
		return `${rent.toString().split("")[0]},${rent
			.toString()
			.split("")
			.slice(1)
			.join("")}`;
	};

	return (
		<div className="property-card">
			<div className="card-img">
				<img src={property?.img} alt={property?.title} />
			</div>
			<div className="card-details">
				<div className="details-upper">
					<p>
						<span>${getRent(property?.rent)}</span>/ month
					</p>
					<button onClick={() => console.log("heart click")}>
						<FiHeart />
					</button>
				</div>
				<div className="details-mid">
					<p>{property?.title}</p>
					<p>{property?.location}</p>
				</div>
				<div className="details-bottom">
					<p>
						<span>
							<BiBed />
						</span>{" "}
						{property?.beds} Beds
					</p>
					<p>
						<span>
							<BiBath />
						</span>{" "}
						{property?.bathrooms} Bathrooms
					</p>
					<p>
						<span>
							<TbBoxMargin />
						</span>{" "}
						{property?.area} m<sup>2</sup>
					</p>
				</div>
			</div>
		</div>
	);
};
