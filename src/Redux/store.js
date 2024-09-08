import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slicse/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
  },
  devTools: true,
});

export default store;
