import { useSelector, useDispatch } from 'react-redux';
import type { Dispatch, UnknownAction } from '@reduxjs/toolkit';

import CountDisplay from './components/CountDisplay';
import { incrementCount } from './features/counter/counterSlice';

function App() {
  const currentCount: number = useSelector(
    (state: any) => state.counter.currentCount
  );
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  return (
    <div>
      <h1 className='text-4xl bg-red-100'>hiii {currentCount}</h1>
      <button
        onClick={() => dispatch(incrementCount())}
        className='cursor-pointer'
      >
        increment
      </button>
      <CountDisplay />
    </div>
  );
}

export default App;
