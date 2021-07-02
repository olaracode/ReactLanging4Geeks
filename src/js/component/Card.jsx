import React from "react";
import PlaceholderImg from "./../../img/y9DpT.jpg";

export default function Card() {
	return (
		<div className="card my-2 mx-1">
			<img
				className="card-img-top"
				src={PlaceholderImg}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
