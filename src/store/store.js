import { configureStore } from "@reduxjs/toolkit";
import searchSearchDataReducer from "./slices/searchDataSlice";
export const store = configureStore({
  reducer: {
    searchData: searchSearchDataReducer,
  },
});