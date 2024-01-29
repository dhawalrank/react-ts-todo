import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { logger } from "./components/utils/logger";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { addTodo, removeTodo } from "./features/todo";

function App() {
	const todos = useSelector((state: RootState) => state.todos.todos);
	const dispatch = useDispatch() as AppDispatch;

	function handleAddTodo(todo: string) {
		dispatch(addTodo(todo));
		logger.info("Todo added successfully");
	}
	const handleDelete = (id: string) => {
		dispatch(removeTodo(id));
		logger.info("Todo deleted successfully", { id });
	};
	return (
		<div className="App">
			<NewTodo handleAddTodo={handleAddTodo} />
			<TodoList handleDelete={handleDelete} items={todos} />
		</div>
	);
}

export default App;
