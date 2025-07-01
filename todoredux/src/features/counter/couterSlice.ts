import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  currentCount: number;
} = {
  currentCount: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state, _action) => {
      state.currentCount += 1;
    },
    decrementCount: (state, _action) => {
      state.currentCount === 0 ? 0 : (state.currentCount -= 1);
    },
  },
});

export const { incrementCount, decrementCount } = counterSlice.actions;
export default counterSlice.reducer;
