import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo, updateTodos }) {
	return (
		<ul className="todo-list">
			{todos.map((todo) => {
				return (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						removeTodo={removeTodo}
						updateTodos={updateTodos}
					/>
				);
			})}
		</ul>
	);
}

export default TodoList;
