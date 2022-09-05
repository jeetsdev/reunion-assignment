import { createContext, useContext, useState } from "react";
import propertyData from "../data/data.json";

const PropertyDataContext = createContext();
const data = propertyData;

export const PropertyDataProvider = ({ children }) => {
	const [propertyData, setPropertyData] = useState(data);

	return (
		<PropertyDataContext.Provider value={{ propertyData, setPropertyData }}>
			{children}
		</PropertyDataContext.Provider>
	);
};

export const usePropertyData = () => useContext(PropertyDataContext);
