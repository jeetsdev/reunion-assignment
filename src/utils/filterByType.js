export const filterByType = (type, data) => {
	if (type === "All") {
		return data;
	}
	data = data.filter((item) => item.type === type);
	return data;
};
