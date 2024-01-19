import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantsWrapper = () => {
	const [restuarantsList, setrestuarantsList] = useState(resList);
	const searchFunc = (e) => {
		e.preventDefault();
		let userInput = document.querySelector("#search_field").value;
		if (userInput) {
			setrestuarantsList(
				restuarantsList.filter((res) => {
					return res.res_title.includes(userInput);
				})
			);
			console.log(userInput);
		} else {
			setrestuarantsList(resList);
			console.log("Please Enter value");
		}
	};
	return (
		<>
			<section className="search-wrapper my-3">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-md-4">
							<button
								className="btn btn-primary"
								onClick={() => {
									setrestuarantsList(
										restuarantsList.filter((res) => {
											return res.res_rating > 3;
										})
									);
								}}
							>
								Top Rated Restaurants
							</button>
						</div>
						<div className="col-md-4">
							<form className="d-flex flex-wrap" method="post">
								<input
									id="search_field"
									type="text"
									className="form-control"
									placeholder="Search Restaurant"
									required
								/>
								<input
									className="btn btn-primary"
									type="submit"
									value="Search"
									onClick={searchFunc}
								/>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section className="restaurant-wrapper">
				<div className="container">
					<div className="row">
						{restuarantsList.map((res_item) => {
							return <RestaurantCard key={res_item.id} resDetails={res_item} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default RestaurantsWrapper;
