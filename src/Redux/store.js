import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slicse/AuthSlice";
import CourseSlice from "./Slicse/CourseSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course:CourseSlice
  },
  devTools: true,
});

export default store;
