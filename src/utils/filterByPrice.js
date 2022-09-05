export const filterByPrice = (price, data) => {
	switch (price) {
		case "All":
			break;
		case "$500 - $2500":
			data = data.filter((item) => item.rent >= 500 && item.rent <= 2500);
			break;
		case "$2500 - $3500":
			data = data.filter(
				(item) => item.rent >= 2500 && item.rent <= 3500,
			);
			break;
		case "$3500 - $5000":
			data = data.filter(
				(item) => item.rent >= 3500 && item.rent <= 5000,
			);
			break;
		default:
			break;
	}
	return data;
};
