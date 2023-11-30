import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
	return (
		<h1 className="someClass" data-key="value">
			Hello JSX1
		</h1>
	);
};
const Paragraph = () => {
	return (
		<p>
			Some Text <strong>Some bold Text</strong>
		</p>
	);
};
const Image = () => {
	return (
		<img
			className="img-fluid"
			src="https://miro.medium.com/v2/da:true/resize:fit:1160/1*t_G1kZwKv0p2arQCgYG7IQ.gif"
		/>
	);
};
const Card = () => {
	return (
		<div className="container">
			<div className="row align-items-center">
				<div className="card py-3">
					<div className="row align-items-center">
						<div className="col-6">
							<Heading />
							<Paragraph />
						</div>
						<div className="col-6">
							<div className="someWrapper">
								<Image />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Card />);
