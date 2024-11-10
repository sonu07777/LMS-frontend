import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layout/homeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseLecture,
  getCourseLectures,
} from "../../Redux/Slicse/lectureSlice.js";

function displayLecture() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state.lectures);
  const { role } = useSelector((state) => state.auth);

  // console.log("the display lecture is ", state);
  console.log("the display lecture is ", lectures); 0 

  const [currentVideo, setCurrentVideo] = useState(0);

  async function onLectureDelete(courseId, lectureId) {
    console.log("the course id is ", courseId, lectureId);
    await dispatch(
      deleteCourseLecture({ courseId: courseId, lectureId: lectureId })
    );
    await dispatch(getCourseLectures(courseId));
  }

  useEffect(() => {
    // console.log(state);
    if (!state) navigate("/course");
    dispatch(getCourseLectures(state._id));
  }, []);
  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-wihte mx-[5%]">
        <div className="text-center text-2xl font-semibold text-yellow-500">
          Course Name: {state?.title}
        </div>

        {lectures && lectures.length > 0 ? (
          <div className="flex justify-center gap-10 w-full">
            {/* left section for playing videos and displaying course details to admin */}
            <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
              <video
                src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                controls
                disablePictureInPicture
                muted
                controlsList="nodownload"></video>
              <div>
                <h1>
                  <span className="text-yellow-500"> Title: </span>
                  {lectures && lectures[currentVideo]?.title}
                </h1>
                <p>
                  <span className="text-yellow-500 line-clamp-4">
                    Description:{" "}
                  </span>
                  {lectures && lectures[currentVideo]?.description}
                </p>
              </div>
            </div>

            {/* right section for displaying list of lectres */}
            <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
              <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                <p>Lectures list</p>
                {role == "ADMIN" && (
                  <button
                    onClick={() =>
                      navigate("/course/addlecture", { state: { ...state } })
                    }
                    className="btn btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                    Add new lecture
                  </button>
                )}
              </li>
              {lectures &&
                lectures.map((lecture, idx) => {
                  return (
                    <li className="space-y-2" key={lecture._id}>
                      <p
                        className="cursor-pointer"
                        onClick={() => setCurrentVideo(idx)}>
                        <span> Lecture {idx + 1} : </span>
                        {lecture?.title}
                      </p>
                      {role == "ADMIN"  && (
                        <button
                          onClick={() =>
                            onLectureDelete(state?._id, lecture?._id)
                          }
                          className="btn btn-accent px-2 py-1 rounded-md font-semibold text-sm">
                          Delete lecture
                        </button>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          role == "ADMIN" && (
            <button
              onClick={() =>
                navigate("/course/addlecture", { state: { ...state } })
              }
              className="btn btn-primary px-2 py-1 rounded-md font-semibold text-sm">
              Add new lecture
            </button>
          )
        )}
      </div>
    </HomeLayout>
  );
}

export default displayLecture;
