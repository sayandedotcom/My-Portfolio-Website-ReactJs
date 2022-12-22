import { createSlice } from "@reduxjs/toolkit";
const initialState = { breakpoint: 1600 };
export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    resize: (state, actions) => {
      state.breakpoint = actions.payload;
    },
  },
});
export const { resize } = windowSlice.actions;
export default windowSlice.reducer;
