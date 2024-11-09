import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slicse/AuthSlice";
import CourseSlice from "./Slicse/CourseSlice.js";
import RazorPaySlice from "./Slicse/RazorpaySlice.js";
import LectureSlice from "../Redux/Slicse/lectureSlice.js"

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course:CourseSlice,
    razorpay:RazorPaySlice,
    lectures: LectureSlice,
  },
  devTools: true,
});

export default store;
