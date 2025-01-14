import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    //this will increment the counter by 1 each time increment button is clicked, because React operates in this way that if same tasks are going to happen with same outcomes it will increment by one only here. And also because we're using the count value from the surrounding (outer scope) and when trying to access a variable of state just after it has been updated using setState , the variable will still hold the old value. Therefore, the first count got 0 as its value and since we again called setCount so the count value was still 0 and in the last setCount too as we just decided to use the count value immedietly after the setCount so the count value remaining 0
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //This will work as expected because here we're not relying on the count variable's value that may not be accuurate sometimes if we try to access it just after updating the state as React tends to send similar changes in bulks so to avoid unnecessary re-renders. This below example works because we're using the previous state value here is the functional update value of the count variable which is the most updated/recent value
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  //refer to this link for better undestanding -> https://react.dev/learn/state-as-a-snapshot
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <button className='border border-black' onClick={increment}>
        Increment
      </button>
      {count}
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
        }
        className='border border-black'
      >
        Decrement
      </button>
    </div>
  );
}
