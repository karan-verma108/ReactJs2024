import { useState } from 'react';

export default function BackgroundChanger() {
  const [currentBgColor, setCurrentBgColor] = useState('bg-gray-500');

  const handleColorClick = (e) => {
    if (e.target.id) {
      setCurrentBgColor(e.target.id);
    }
  };
  return (
    <div
      className={`flex items-end duration-200 pb-20 h-screen ${currentBgColor}`}
    >
      <ul
        className='w-10/12 mx-auto h-fit flex justify-evenly shadow-lg py-3 border border-gray-400 rounded-md'
        onClick={handleColorClick}
      >
        <li
          className='py-2 px-4 rounded-lg bg-red-600 text-white cursor-pointer border border-black'
          id='bg-red-600'
        >
          Red
        </li>
        <li
          className='py-2 px-4 rounded-lg bg-green-600 text-white cursor-pointer border border-black'
          id='bg-green-600'
        >
          Green
        </li>
        <li
          className='py-2 px-4 rounded-lg bg-yellow-600 text-white cursor-pointer border border-black'
          id='bg-yellow-600'
        >
          Yellow
        </li>
        <li
          className='py-2 px-4 rounded-lg bg-blue-600 text-white cursor-pointer border border-black'
          id='bg-blue-600'
        >
          Blue
        </li>
        <li
          className='py-2 px-4 rounded-lg bg-pink-600 text-white cursor-pointer border border-black'
          id='bg-pink-600'
        >
          Pink
        </li>
        <li
          className='py-2 px-4 rounded-lg bg-black text-white cursor-pointer border border-white'
          id='bg-black'
        >
          Black
        </li>
        <li
          className='py-2 px-4 rounded-lg bg-white text-black cursor-pointer border border-black'
          id='bg-white'
        >
          White
        </li>
      </ul>
    </div>
  );
}
