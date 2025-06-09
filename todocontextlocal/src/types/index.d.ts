interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type StringState = State<string>;
type NumberState = State<number>;
// type TodoState = State<TodoType[]>;
type BooleanState = State<boolean>;
type NumberOrNullState = State<number | null>;
