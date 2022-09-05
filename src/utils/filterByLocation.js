export const filterByLocation = (location, data) => {
	if (location === "All") {
		return data;
	}
	data = data.filter((item) => item.city === location.split(",")[0]);
	return data;
};
