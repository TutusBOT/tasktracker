import React, { useState } from "react";

function Todo({ todo, toggleComplete, removeTodo, updateTodos }) {
	const [changedName, setChangedName] = useState("");

	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	function handleRemoveClick() {
		removeTodo(todo.id);
	}
	const [editTodoDisplay, setEditTodoDisplay] = useState("none");

	function displayTodo() {
		setEditTodoDisplay("flex");
	}

	function editTodoClose() {
		setEditTodoDisplay("none");
		if (changedName) {
			todo.task = changedName;
			updateTodos();
			return;
		}
	}
	return (
		<li className="todo">
			<div
				className="todo-text"
				style={{ textDecoration: !todo.completed ? "none" : "line-through" }}
				onClick={displayTodo}
			>
				{todo.task}
			</div>
			<div className="todo-buttons">
				<input
					id="checkbox"
					type="checkbox"
					onClick={handleCheckboxClick}
					defaultChecked={todo.completed ? true : false}
				/>

				<button className="todo-remove" onClick={handleRemoveClick}>
					X
				</button>
			</div>
			<div className="todo-editor" style={{ display: editTodoDisplay }}>
				Change name for: {todo.task}
				<input
					type="text"
					value={changedName}
					onChange={(e) => {
						setChangedName(e.target.value);
					}}
				/>
				<button onClick={editTodoClose}>Change</button>
			</div>
		</li>
	);
}

export default Todo;
