import React, { useEffect } from "react";
import Homelayout from "../../Layout/homeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../../Redux/Slicse/CourseSlice";
import CourseCard from '../../Component/courseCard.jsx'

  function courseList() {
  const dispatch = useDispatch()
  const {courseData} = useSelector((state)=>state.course)
  // console.log(courseData); x
  
  async function loaderCourse() {
    await dispatch(getAllCourse())
  }
  useEffect(() => {
    loaderCourse()
  }, []);

  
  return (
    <Homelayout>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold mb-5">
          Explore the courses made by
          <span className="font-bold text-yellow-500">Industry experts</span>
        </h1>
        <div className="mb-10 flex flex-wrap gap-14">
            {courseData?.map((element) => {
              return <CourseCard key={element._id} data={element} />;
            })}
        </div>
      </div>
    </Homelayout>
  );
}

export default courseList;
