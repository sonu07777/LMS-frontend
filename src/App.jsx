import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import HomeLayout from "./Layout/homeLayout";
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx";
import NotFoundPage from "./Pages/NotFoundpage.jsx";
import Sign_up from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import CourseList from "./Pages/Course/courseList.jsx";
import Contact from "./Pages/Contact.jsx";
import DeniedPage from "./Pages/deniedpage.jsx";
import Description from "./Pages/Course/description.jsx";
import RequireAuth from "./Component/Auth/RequireAuth.jsx";
import CreateCourse from "./Component/createCourse.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>/
        <Route path="/About" element={<AboutUs/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/courses" element={<CourseList/>}></Route>
        <Route path="/signUp" element={<Sign_up/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/denied" element={<DeniedPage/>}></Route>
        <Route path="/course/description/" element={<Description/>}></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path="/course/create" element={<CreateCourse/>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
