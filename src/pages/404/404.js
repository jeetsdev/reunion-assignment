import React from "react";
import notFoundImg from "../../asset/404.svg";
import "./404.css"

export const NotFound = () => {
	return (
		<div className="container-not-found">
			<img src={notFoundImg} alt="Page not found" />
			<h1>Page Not Found</h1>
		</div>
	);
};
