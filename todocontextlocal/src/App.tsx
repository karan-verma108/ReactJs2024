import { useState } from 'react';
import { TodoProvider } from './contexts/Todo';
import TodoItem from './components/TodoItem';

function App() {
  const [inputValue, setInputValue]: StringState = useState<string>('');

  const getTodosFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem('todos') || '');
    } catch (error: unknown) {
      console.log('error', error);

      return null;
    }
  };

  const todos = getTodosFromLocalStorage();

  const addTodo = (todo: TodoType) => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify([...todos, todo]));
    } else {
      localStorage.setItem('todos', JSON.stringify([todo]));
    }
    setInputValue('');
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

  return (
    <TodoProvider value={{ todos, addTodo }}>
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
