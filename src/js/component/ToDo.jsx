import React from "react";
//create your first component
export default class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: ["Hacer la cama", "Montar el cafe", "Hacer el desayuno"],
			newTask: ""
		};
		this.handleChangeTask = this.handleChangeTask.bind(this);
		this.handleAddTask = this.handleAddTask.bind(this);
		this.handleAddTaskClick = this.handleAddTaskClick.bind(this);

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChangeTask(event) {
		this.setState({
			...this.state.tasks,
			newTask: event.target.value
		});
	}
	handleAddTask(event) {
		if (event.key == "Enter" && this.state.newTask.length > 4) {
			this.setState({
				tasks: [...this.state.tasks, this.state.newTask],
				newTask: ""
			});
		}
	}
	handleAddTaskClick() {
		this.setState({
			tasks: [...this.state.tasks, this.state.newTask],
			newTask: ""
		});
	}

	handleDelete(task) {
		console.log(task);
		let filteredTasks = this.state.tasks.filter(currentTask => {
			if (currentTask !== task) {
				return currentTask;
			}
		});
		console.log(filteredTasks);
		this.setState({
			tasks: filteredTasks
		});
	}

	render() {
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
										value={this.state.newTask}
										onChange={event =>
											this.handleChangeTask(event)
										}
										onKeyPress={event =>
											this.handleAddTask(event)
										}
									/>
									<button
										onClick={() =>
											this.handleAddTaskClick()
										}
										type="button"
										className="btn btn-success">
										+
									</button>
								</li>
								{this.state.tasks.map((task, key) => {
									return (
										<li
											key={key}
											className="list-group-item d-flex justify-content-between">
											{task}
											<button
												type="button"
												onClick={() => {
													this.handleDelete(task);
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
								Tareas por hacer{" "}
								<strong>{this.state.tasks.length}</strong>
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
