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

export default SearchBar;
