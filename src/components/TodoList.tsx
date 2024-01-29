import { Todo } from "../models/todo";
import "./TodoList.css";

interface TodoListProps {
	items: Todo[];
	handleDelete: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {
	return (
		<ul>
			{props.items.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button
						type="button"
						onClick={(_) => props.handleDelete(todo.id)}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
