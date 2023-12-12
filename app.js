import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons";
import logo from "./assets/imgs/app-logo.png";

// Dummy Data for Restaurant Cards
const reslist = [
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 1",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 2",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 3",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 4",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 5",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 6",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 7",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 8",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 9",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 10",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 11",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 12",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
	{
		id: Math.floor(Math.random() * 999),
		image_url: "https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg",
		res_title: "Res Title 13",
		res_rating: (Math.random() * 5).toFixed(2),
		res_deliveryTime: Math.floor(Math.random() * 46),
		res_cuisines: ["Burgers", "Steaks", "Sandwiches"],
		res_location: "Hyderabad",
	},
];

// Components
const Header = () => {
	return (
		<header className="site-header py-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-2">
						<div className="logo-wrapper">
							<a href="#">
								<img src={logo} className="img-fluid" />
							</a>
						</div>
					</div>
					<div className="col-md-10">
						<nav className="navbar navbar-expand-lg">
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<a className="nav-link active" aria-current="page" href="#">
											Home
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											About
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Contact Us
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											<box-icon name="cart"></box-icon>
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
const SearchBar = () => {
	return (
		<section className="search-wrapper my-3">
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-md-4">
						<form className="d-flex flex-wrap" method="post">
							<input
								type="text"
								className="form-control"
								placeholder="Search Restaurant"
								required
							/>
							<input className="btn btn-primary" type="submit" value="Search" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
const RestaurantsWrapper = () => {
	return (
		<section className="restaurant-wrapper">
			<div className="container">
				<div className="row">
					{reslist.map((res_item) => {
						return <RestaurantCard key={res_item.id} resDetails={res_item} />;
					})}
				</div>
			</div>
		</section>
	);
};
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
						<box-icon type="solid" name="star-half"></box-icon> {res_rating} -
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
// Components Ends

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
