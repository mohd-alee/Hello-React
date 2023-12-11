import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons";
import logo from "./assets/imgs/app-logo.png";

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
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
				</div>
			</div>
		</section>
	);
};
const RestaurantCard = () => {
	return (
		<div className="col-md-3 mb-3">
			<div className="single-res-card">
				<div className="res-featured-image">
					<img
						src="https://images.deliveryhero.io/image/fd-pk/LH/hwd6-listing.jpg"
						className="img-fluid"
						alt="Restaurant Image"
					/>
				</div>
				<div className="res-deets pt-3">
					<h5 className="res-title">Restaurant Title</h5>
					<p className="res-rating d-flex align-items-center">
						<box-icon type="solid" name="star-half"></box-icon> 4.5 -
						<box-icon name="timer"></box-icon> 30 mins
					</p>
					<p className="res-cuisine mb-0">
						<span>Cuisines</span>: Burgers, Steaks, Sandwiches...
					</p>
					<p className="res-location mb-0">
						<span>Location</span>: Hyderabad
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
