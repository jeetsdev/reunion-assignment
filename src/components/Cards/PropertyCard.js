import "./PropertyCard.css";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { TbBoxMargin } from "react-icons/tb";
import { BiBed, BiBath } from "react-icons/bi";
import { usePropertyData } from "../../contexts";

export const PropertyCard = ({ property }) => {
	const { propertyData, setPropertyData } = usePropertyData();

	// To get rent into strinf
	const getRent = (rent) => {
		return `${rent.toString().split("")[0]},${rent
			.toString()
			.split("")
			.slice(1)
			.join("")}`;
	};

	// Favorite button handler
	const favClickHandler = () => {
		setPropertyData(
			propertyData.map((data) => {
				return data.id === property.id
					? { ...data, favorite: !data.favorite }
					: data;
			}),
		);
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
					<button onClick={favClickHandler}>
						{property.favorite ? <FaHeart /> : <FiHeart />}
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
