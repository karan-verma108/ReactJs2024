import { useState } from 'react';

import useTodo from '../contexts/Todo';

export default function TodoItem({
  item,
}: {
  item: TodoType;
}): React.JSX.Element {
  const [isEditing, setIsEditing]: BooleanState = useState<boolean>(false);
  const [editedTodo, setEditedTodo]: StringState = useState<string>('');

  const { todos, toggleComplete, deleteTodo, updateTodo } = useTodo();

  const handleSave = (id: number) => {
    if (todos) {
      const todoBeingEdited: TodoType = todos.find(
        (item: TodoType) => id === item.id
      ) ?? { id: Math.random(), title: '', completed: false };

      todoBeingEdited.title = editedTodo;

      updateTodo(id, todoBeingEdited);
      setIsEditing(false);
    }
  };

  const handleDelete = (id: number) => {
    setIsEditing(false);
    deleteTodo(id);
  };
  return (
    <div className='grid grid-cols-12'>
      {isEditing && (
        <input
          type='text'
          id='editedTodo'
          name='editedTodo'
          value={editedTodo}
          autoFocus={isEditing}
          placeholder={item.title}
          className='col-span-8'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTodo(e.target.value)
          }
        />
      )}
      {!isEditing && (
        <input
          type='checkbox'
          id='completed'
          name='completed'
          value={`${item.completed}`}
          className='col-span-1'
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
        />
      )}
      {!isEditing && (
        <p className={`col-span-7 ${item.completed ? 'line-through' : ''}`}>
          {item.title}
        </p>
      )}
      <div className='flex gap-1 items-center col-span-4'>
        {!isEditing && (
          <button
            className='cursor-pointer bg-orange-400 text-white'
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        {isEditing && (
          <button
            className='cursor-pointer bg-orange-400 text-white'
            onClick={() => handleSave(item.id)}
          >
            Save
          </button>
        )}
        <button
          className='cursor-pointer bg-red-500 text-white'
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
