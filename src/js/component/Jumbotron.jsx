import React from "react";

export default function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A warm welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call To Action
				</a>
			</p>
		</div>
	);
}
