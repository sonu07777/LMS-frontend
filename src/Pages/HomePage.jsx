import React from "react";
import HomeLayout from "../Layout/homeLayout";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best
            <span className="text-yellow-500 ">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200 ">
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className=" bg-yellow-500  px-5 rounded-md py-3 font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Course
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                contact us
              </button>
            </Link>
          </div>
        </div>
        <div className=" hidden  w-1/2 sm:flex  items-center justify-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/018/246/021/small/studying-book-illustration-free-png.png" alt="home page image" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
