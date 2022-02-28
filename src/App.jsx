import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
	const [todos, setTodos] = useState([]);

	function updateTodos() {
		setTodos([...todos]);
	}

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	function addTodo(todo) {
		setTodos([todo, ...todos]);
	}

	function toggleComplete(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	}

	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function clearTodos() {
		setTodos([]);
	}

	return (
		<>
			<header className="header">Task Tracker</header>
			<div className="todo-wrapper">
				<TodoForm addTodo={addTodo} clearTodos={clearTodos}></TodoForm>
				<TodoList
					todos={todos}
					toggleComplete={toggleComplete}
					removeTodo={removeTodo}
					updateTodos={updateTodos}
				></TodoList>
			</div>
		</>
	);
}

export default App;
