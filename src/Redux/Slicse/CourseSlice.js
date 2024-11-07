import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../axiosInstance/authAxio"

const initialState = {
    courseData:[]
}

export const getAllCourse = createAsyncThunk("/course/get",async()=>{
    try {
        const response = axiosInstance.get("/course")
        console.log("The response is :-",response);
        
        toast.promise(response,{
            loading:"loading the courses from the database",
            success:"courses are lode successfully",
            error:"something went wrong"
        });
        return (await response).data.courses;
    } catch (error) {
        toast.error("something error")
    }
})
export const createNewCourse = createAsyncThunk("/course/create",async(data)=>{
    try {
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);
        formData.append("category", data?.category);
        formData.append("createdBy", data?.createdBy);
        formData.append("thumbnail", data?.thumbnail);

        const response = axiosInstance.post("/course", formData);
        toast.promise(response, {
            loading: "Creating new course",
            success: "Course created successfully",
            error: "Failed to create course"
        });

        return (await response).data

    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})
const SliceCreating = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourse.fulfilled,(state,action)=>{
            console.log(action.payload);
            
            if (action.payload) {
                state.courseData = [...action.payload]
            }
        })
    }
    
})

export default SliceCreating.reducer;