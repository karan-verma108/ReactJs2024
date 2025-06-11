import { useState } from 'react';
import { TodoProvider } from './contexts/Todo';
import TodoItem from './components/TodoItem';
import { getTodosFromLocalStorage } from './utils/helper';

function App() {
  const [inputValue, setInputValue]: StringState = useState<string>('');
  const localTodos = getTodosFromLocalStorage();

  const [todos, setTodos]: [
    TodoType[],
    React.Dispatch<React.SetStateAction<TodoType[]>>
  ] = useState<TodoType[]>(localTodos ?? []);

  const addTodo = (todo: TodoType) => {
    if (todos) {
      const updatedTodosWithExistingTodo = [...todos, todo];
      setTodos(updatedTodosWithExistingTodo);
      localStorage.setItem(
        'todos',
        JSON.stringify(updatedTodosWithExistingTodo)
      );
    } else {
      const updatedTodos = [todo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
    setInputValue('');
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((item: TodoType) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((item: TodoType) => id !== item.id);

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const updateTodo = (id: number, todoItem: TodoType) => {
    console.log('id', id);
    console.log('todoItem', todoItem);

    const updatedTodos: TodoType[] = todos.map((item: TodoType) =>
      item.id === id ? (item = todoItem) : item
    );

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    console.log('updated todos', updatedTodos);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoObj: TodoType = {
      id: Math.random() * 100,
      title: inputValue,
      completed: false,
    };
    addTodo(todoObj);
  };

  console.log('todos', todos);

  return (
    <TodoProvider
      value={{ todos, addTodo, toggleComplete, deleteTodo, updateTodo }}
    >
      <div className='flex flex-col gap-4 justify-center items-center h-screen'>
        <form
          onSubmit={handleSubmit}
          className='w-full flex gap-4 justify-center items-center'
        >
          <input
            type='text'
            id='todo'
            name='todo'
            value={inputValue}
            className='border border-black/35 outline-none px-3 py-2 rounded-md'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <button
            className='bg-blue-400 text-white py-2 px-3 rounded-md'
            type='submit'
          >
            Add
          </button>
        </form>

        <div className='flex flex-col gap-3 border border-black w-fit'>
          {todos.length > 0 &&
            todos.map((item: TodoType, index: number) => (
              <TodoItem key={index} item={item} />
            ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
