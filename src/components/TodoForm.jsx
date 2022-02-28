import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo, clearTodos }) {
	const [todo, setTodo] = useState({
		id: "",
		task: "",
		completed: false,
	});

	function handleTaskInputChange(e) {
		setTodo({ ...todo, task: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuidv4() });

			setTodo({ ...todo, task: "" });
		}
	}

	return (
		<div className="todo-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="I need to..."
					value={todo.task}
					name="task"
					className="todo-input"
					onChange={handleTaskInputChange}
				/>
				<button className="todo-button" type="submit">
					Add
				</button>
				<span>
					<button className="todo-button" onClick={clearTodos}>
						Clear
					</button>
				</span>
			</form>
		</div>
	);
}

export default TodoForm;
