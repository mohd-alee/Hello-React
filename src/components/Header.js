import logo from "../../assets/imgs/app-logo.png";

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

export default Header;
