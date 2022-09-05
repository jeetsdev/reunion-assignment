import { filterByBeds } from "./filterByBeds";
import { filterByLocation } from "./filterByLocation";
import { filterByPrice } from "./filterByPrice";
import { filterByType } from "./filterByType";

export const filterData = (state, data) => {
	if (state.price.length) {
		data = filterByPrice(state.price, data);
	}
	if (state.type.length) {
		data = filterByType(state.type, data);
	}
	if (state.location.length) {
		data = filterByLocation(state.location, data);
	}
	if (state.beds.length) {
		data = filterByBeds(state.beds, data);
	}
	return data;
};
