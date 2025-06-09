import type React from 'react';

export default function TodoItem({
  item,
}: {
  item: TodoType;
}): React.JSX.Element {
  return (
    <div className='grid grid-cols-12'>
      <input
        type='checkbox'
        id='completed'
        name='completed'
        value=''
        className='col-span-1'
        checked={item.completed}
      />
      <p className='col-span-7'>{item.title}</p>
      <div className='flex gap-1 items-center col-span-4'>
        <button className='cursor-pointer bg-orange-400 text-white'>
          Edit
        </button>
        <button className='cursor-pointer bg-red-500 text-white'>Delete</button>
      </div>
    </div>
  );
}
