export const filterByBeds = (beds, data) => {
	if (beds === "All") {
		return data;
	}
	data = data.filter((item) => item.beds === Number(beds));
	return data;
};
