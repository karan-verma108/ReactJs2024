import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <button
        className='border border-black'
        onClick={() => setCount(count < 20 ? count + 1 : 20)}
      >
        Increment
      </button>
      {count}
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        className='border border-black'
      >
        Decrement
      </button>
    </div>
  );
}
