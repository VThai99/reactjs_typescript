import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface countState {
  value: number;
}
const initialState: countState = {
  value: 0,
};
export const countReducer = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = countReducer.actions

export default countReducer.reducer