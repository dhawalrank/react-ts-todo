import { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
	handleAddTodo: (todo: string) => void;
}
const NewTodo = (props: NewTodoProps) => {
	const textInputRef = useRef<HTMLInputElement>(null);
	const handleTodoSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const input = textInputRef.current!.value;
		props.handleAddTodo(input);
	};
	return (
		<form onSubmit={handleTodoSubmit}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo text</label>
				<input type="text" id="todo-text" ref={textInputRef} />
			</div>
			<button type="submit">Add TODO</button>
		</form>
	);
};

export default NewTodo;
