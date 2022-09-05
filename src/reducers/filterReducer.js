export const filterReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRICE":
			return { ...state, price: action.payload };
		case "SET_TYPE":
			return { ...state, type: action.payload };
		case "SET_LOCATION":
			return { ...state, location: action.payload };
		case "SET_BEDS":
			return { ...state, beds: action.payload };
		case "CLEAR_FILTER":
			return {
				price: [],
				type: [],
				location: [],
				beds: [],
			};
		default:
			return state;
	}
};
