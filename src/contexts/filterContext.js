import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, {
		price: [],
		type: [],
		location: [],
		beds: [],
	});
	return (
		<FilterContext.Provider
			value={{ filterState: state, filterDispatch: dispatch }}
		>
			{children}
		</FilterContext.Provider>
	);
};

// Custom hook to use context
export const useFilter = () => useContext(FilterContext);
