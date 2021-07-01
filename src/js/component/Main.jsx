import React, { useState } from "react";
import ToDo from "./ToDo";
import Hooks from "./Hooks";

export function Main() {
	const [todo, settodo] = useState("none");
	const [hook, sethook] = useState("none");
	let handleHook = () => {
		if (todo === "block") {
			settodo("none");
		}
		sethook("block");
	};
	let handleToDo = () => {
		if (hook === "block") {
			sethook("none");
		}
		settodo("block");
	};
	return (
		<div>
			<div>
				<div className="text-center mt-5">
					<h2>To-Do</h2>
					<div className="btn-group my-2">
						<button
							onClick={() => handleHook()}
							className={
								hook === "block"
									? "btn btn-outline-primary active"
									: "btn btn-outline-primary"
							}>
							Hooks
						</button>
						<button
							onClick={() => handleToDo()}
							className={
								todo === "block"
									? "btn btn-outline-primary active"
									: "btn btn-outline-primary"
							}>
							Class
						</button>
					</div>
				</div>
			</div>
			<div style={{ display: todo }}>
				<ToDo />
			</div>
			<div style={{ display: hook }}>
				<Hooks />
			</div>
		</div>
	);
}
