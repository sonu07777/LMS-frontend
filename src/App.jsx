import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import HomeLayout from "./Layout/homeLayout";
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>/
        <Route path="/About" element={<AboutUs/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
