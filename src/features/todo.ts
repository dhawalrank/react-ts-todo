import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../models/todo";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [] as Todo[],
	},
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.todos = [
				...state.todos,
				{ id: Math.random().toString(), text: action.payload },
			];
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
