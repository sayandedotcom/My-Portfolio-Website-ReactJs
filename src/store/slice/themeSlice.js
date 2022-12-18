import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: false };
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    dark: (state) => {
      state.value = !state.value;
    },
  },
});
export const { dark } = themeSlice.actions;
export default themeSlice.reducer;
