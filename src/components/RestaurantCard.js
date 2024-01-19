const RestaurantCard = ({ resDetails } = props) => {
	const {
		image_url,
		res_cuisines,
		res_title,
		res_rating,
		res_deliveryTime,
		res_location,
	} = resDetails;
	return (
		<div className="col-md-3 mb-3">
			<div className="single-res-card">
				<div className="res-featured-image">
					<img src={image_url} className="img-fluid" alt="Restaurant Image" />
				</div>
				<div className="res-deets pt-3">
					<h5 className="res-title">{res_title}</h5>
					<p className="res-rating d-flex align-items-center">
						<box-icon type="solid" name="star-half"></box-icon> {res_rating} |
						<box-icon name="timer"></box-icon> {res_deliveryTime} mins
					</p>
					<p className="res-cuisine mb-0">
						<span>Cuisines</span>: {res_cuisines.join(", ")}...
					</p>
					<p className="res-location mb-0">
						<span>Location</span>: {res_location}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
