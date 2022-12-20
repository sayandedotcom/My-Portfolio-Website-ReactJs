import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import windowReducer from "./slice/windowlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    window: windowReducer,
  },
});
