interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type StringState = State<string>;
type NumberState = State<number>;
type BooleanState = State<boolean>;
type NumberOrNullState = State<number | null>;

type TodoContextType = {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  updateTodo: (id: number, todo: TodoType) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
};
