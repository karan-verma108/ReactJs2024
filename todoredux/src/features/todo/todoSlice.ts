import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TodoType {
  id: number;
  title: string;
}

const initialState: {
  todos: TodoType[];
} = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (item: TodoType) => item.id !== action.payload
      );
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; value: string }>
    ) => {
      const affectedTodo = state.todos.find(
        (item: TodoType) => item.id === action.payload.id
      );

      if (affectedTodo) {
        affectedTodo.title = action.payload.value;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
