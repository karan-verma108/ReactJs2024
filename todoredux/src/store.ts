import {
  configureStore,
  Tuple,
  type EnhancedStore,
  type StoreEnhancer,
  type ThunkDispatch,
  type UnknownAction,
} from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import todoSlice from './features/todo/todoSlice';

export const store: EnhancedStore<
  unknown,
  UnknownAction,
  Tuple<
    [
      StoreEnhancer<{
        dispatch: ThunkDispatch<unknown, undefined, UnknownAction>;
      }>,
      StoreEnhancer
    ]
  >
> = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
});
