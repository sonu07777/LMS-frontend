import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slicse/AuthSlice";
import CourseSlice from "./Slicse/CourseSlice.js";
import RazorPaySlice from "./Slicse/RazorpaySlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course:CourseSlice,
    razorpay:RazorPaySlice,
  },
  devTools: true,
});

export default store;
