import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types

interface testSliceState {
  count: number;
}

export type incrementDecrementTest = (state: testSliceState) => void;

const initialState: testSliceState = {
  count: 0
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  }
});

// export for use around the app
export const { increment, decrement, reset, incrementByAmount } =
  testSlice.actions;

// export for store
const testReducer = testSlice.reducer;
export default testReducer;
