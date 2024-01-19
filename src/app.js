import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons";
import Header from "./components/Header";
import RestaurantsWrapper from "./components/RestaurantsWrapper";

const AppLayout = () => {
	return (
		<>
			<Header />
			<RestaurantsWrapper />
		</>
	);
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
