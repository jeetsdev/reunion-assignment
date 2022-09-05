export const searchProperty = (text, data) => {
	if (text.trim() === "") {
		return data;
	}
	return data.filter(
		(item) =>
			item.title.toLowerCase().includes(text.toLowerCase().trim()) ||
			item.location.toLowerCase().includes(text.toLowerCase().trim()) ||
			item.city.toLowerCase().includes(text.toLowerCase().trim()),
	);
};
