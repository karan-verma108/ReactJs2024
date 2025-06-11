import { createContext, useContext } from 'react';

export const TodoContext: React.Context<TodoContextType> =
  createContext<TodoContextType>({
    todos: [],
    addTodo: (_todo: TodoType) => {},
    updateTodo: (_id: number, _todo: TodoType) => {},
    deleteTodo: (_id: number) => {},
    toggleComplete: (_id: number) => {},
  });

export const TodoProvider: React.Provider<TodoContextType> =
  TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
