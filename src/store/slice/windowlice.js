import { createSlice } from "@reduxjs/toolkit";
const initialState = { breakpoint: window.innerWidth };
export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    resize: (state) => {
      state.breakpoint = window.innerWidth;
    },
  },
});
export const { resize } = windowSlice.actions;
export default windowSlice.reducer;
