import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const handleAddTodo = (todo: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Math.random().toString(), text: todo },
		]);
	};
	const handleDelete = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};
	return (
		<div className="App">
			<NewTodo handleAddTodo={handleAddTodo} />
			<TodoList handleDelete={handleDelete} items={todos} />
		</div>
	);
}

export default App;
