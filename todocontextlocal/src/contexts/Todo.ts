import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo: TodoType) => {},
  updateTodo: (id: number, todo: TodoType) => {},
  deleteTodo: (id: number) => {},
  toggleComplete: (id: number) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
