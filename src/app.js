import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import RestaurantsWrapper from "./components/RestaurantsWrapper";

const AppLayout = () => {
	return (
		<>
			<Header />
			<SearchBar />
			<RestaurantsWrapper />
		</>
	);
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
