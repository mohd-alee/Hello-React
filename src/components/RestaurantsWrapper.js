import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantsWrapper = () => {
	return (
		<section className="restaurant-wrapper">
			<div className="container">
				<div className="row">
					{resList.map((res_item) => {
						return <RestaurantCard key={res_item.id} resDetails={res_item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default RestaurantsWrapper;
