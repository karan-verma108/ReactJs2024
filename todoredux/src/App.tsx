import { useSelector, useDispatch } from 'react-redux';
import type { Dispatch, UnknownAction } from '@reduxjs/toolkit';

import CountDisplay from './components/CountDisplay';
import {
  decrementCount,
  incrementCount,
} from './features/counter/counterSlice';
import { addTodo, removeTodo, updateTodo } from './features/todo/todoSlice';
import { useState } from 'react';

interface TodoType {
  id: number;
  title: string;
}

interface IsUpdatingType {
  state: boolean;
  id?: number | null;
}

function App() {
  const currentCount: number = useSelector(
    (state: any) => state.counter.currentCount
  );

  const [todoValue, setTodoValue]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const [updatedTodoValue, setUpdatedTodoValue]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const [isUpdating, setIsUpdating]: [
    IsUpdatingType,
    React.Dispatch<React.SetStateAction<IsUpdatingType>>
  ] = useState<IsUpdatingType>({ state: false, id: null });

  const todos: TodoType[] = useSelector((state: any) => state.todo.todos);
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: todoValue,
      }),
      setTodoValue('')
    );
  };

  return (
    <div>
      <h1>counter</h1>
      <div>
        <h1 className='text-4xl bg-red-100'>hiii {currentCount}</h1>
        <button
          onClick={() => dispatch(incrementCount())}
          className='cursor-pointer'
        >
          increment
        </button>
        <button
          onClick={() => dispatch(decrementCount())}
          className='cursor-pointer'
        >
          decrement
        </button>
        <CountDisplay />
      </div>
      <h2>todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='todoItem'
          name='todoItem'
          value={todoValue}
          className='border border-slate-400 p-3 rounded-lg'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodoValue(e.target.value)
          }
        />
        <button type='submit'>add</button>
      </form>
      <div className='flex flex-col gap-3'>
        {todos.map((item: TodoType) => (
          <div
            key={item.id}
            className='border border-black p-2 rounded-lg flex gap-3'
          >
            {(!isUpdating.state || item.id !== isUpdating.id) && (
              <>
                <li>{item.title}</li>
                <button
                  className='bg-red-600 text-white p-1 rounded-lg cursor-pointer'
                  onClick={() => dispatch(removeTodo(item.id))}
                >
                  Delete
                </button>
              </>
            )}

            {isUpdating.state && item.id === isUpdating.id && (
              <input
                type='text'
                id='updatedTodo'
                name='updatedTodo'
                placeholder={item.title}
                value={updatedTodoValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUpdatedTodoValue(e.target.value)
                }
              />
            )}
            {!isUpdating.state && (
              <button
                className='bg-blue-600 text-white p-1 rounded-lg cursor-pointer'
                onClick={() => setIsUpdating({ state: true, id: item.id })}
              >
                update
              </button>
            )}

            {isUpdating.state && item.id === isUpdating.id && (
              <button
                onClick={() => {
                  dispatch(
                    updateTodo({ id: item.id, value: updatedTodoValue })
                  );
                  setIsUpdating({ state: false });
                  setUpdatedTodoValue('');
                }}
                className='cursor-pointer bg-green-500 text-white p-1 rounded-lg'
              >
                save
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
