import React, { useState } from "react";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./NavBar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

export function Main() {
	return (
		<>
			<NavBar />
			<div className="container my-2">
				<Jumbotron />
				<div className="row">
					<div className="col-lg-3 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-sm-12">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
