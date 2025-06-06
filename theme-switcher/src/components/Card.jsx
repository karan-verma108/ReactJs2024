import ThemeButton from './ThemeButton';

export default function Card() {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800'>
      <ThemeButton />
      <img
        className='w-full h-48 object-cover'
        src='https://cdn-icons-png.flaticon.com/512/1453/1453835.png'
        alt='Card image'
      />
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
          Card Title
        </h2>
        <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
          This is a dummy card using Tailwind CSS. You can customize it as
          needed for your app.
        </p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
          Learn More
        </button>
      </div>
    </div>
  );
}
