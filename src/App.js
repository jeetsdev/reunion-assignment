import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Favorite, Home, NotFound } from "./components/pages";
import { Header } from "./components";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Home />} />
				<Route path="/favorite" element={<Favorite />} />
			</Routes>
		</div>
	);
}

export default App;
