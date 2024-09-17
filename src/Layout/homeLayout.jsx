import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import { useDispatch, useSelector } from "react-redux";

function homeLayout({ children }) {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
    console.log(drawerSide[0]);
  }
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    // changeWidth();
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  }
  async function handelLogout(e) {
    e.preventDefault();


    navigate("/")
  }
  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit border-4 border-green-700">
        <input
          className="drawer-toggle border border-blue-700"
          id="my-drawer"
          type="checkbox"
        />
        <div className="drawer-content border border-blue-700">
          <label htmlFor="my-drawer" className="cursor-pointer relative ">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4 border border-red-800"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-3 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={27} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard"> Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            {!isLoggedIn && (
              <li className=" absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full bg-blue-400">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-pink-600">
                    <Link to="/signing_up">Sign up</Link>
                  </button>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className=" absolute bottom-4 w-[90%]">

              <div className="w-full flex items-center justify-center">
                <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full bg-blue-400">
                  <Link to = "/Profile">Profile</Link>
                </button>
                <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-pink-600">
                  <Link to = "/Logout" onClick={handelLogout}>Logout</Link>
                </button>
              </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default homeLayout;
