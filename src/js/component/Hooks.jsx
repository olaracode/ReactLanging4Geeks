import React, { useState } from "react";

export default function Hooks() {
	const [tasks, setTasks] = useState([
		"Realizar todo List",
		"Todo-List con Clases",
		"TodoList con Hooks"
	]);

	const [newTask, setNewTask] = useState("");

	// Manejando el cambio de newTask onChange
	let handleTaskChange = e => {
		setNewTask(e.target.value);
	};

	// Manejando Añadir tareas onKeyPress
	let handleAddTask = e => {
		if (e.keyCode === 13 && newTask.length > 4) {
			console.log("funciona?");
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	};

	// Manejando Añadir tareas onClick
	let handleAddTaskClick = () => {
		if (newTask.length > 4) {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	};

	// Manejando la eliminacion de tareas
	let handleDelete = key => {
		let filteredTasks = tasks.filter((currentTask, currentKey) => {
			if (currentKey !== key) {
				return currentTask;
			}
		});
		setTasks(filteredTasks);
	};
	return (
		<>
			<div className="container">
				<div className="card">
					<div className="card-body">
						<ul className="list-group">
							<li className="list-group-item d-flex justify-content-between">
								<input
									type="text"
									placeholder="Tu nueva tarea"
									value={newTask}
									onChange={e => handleTaskChange(e)}
									onKeyDown={e => handleAddTask(e)}
								/>
								<button
									onClick={() => handleAddTaskClick()}
									type="button"
									className="btn btn-success">
									+
								</button>
							</li>
							{tasks.map((task, key) => {
								return (
									<li
										key={key}
										className="list-group-item d-flex justify-content-between">
										{task}
										<button
											type="button"
											onClick={() => {
												handleDelete(key);
											}}
											className="btn btn-outline-danger">
											X
										</button>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="card-footer">
						<p>
							Tareas por hacer <strong>{tasks.length}</strong>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
