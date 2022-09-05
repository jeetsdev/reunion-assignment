import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Favorite, Home, NotFound } from "./pages";
import { Header } from "./components";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="/favorite" element={<Favorite />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
