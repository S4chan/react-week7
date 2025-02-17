import { configureStore } from "@reduxjs/toolkit";

import toastReducer from "../redux/slices/toastSlice";

const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

export default store;
