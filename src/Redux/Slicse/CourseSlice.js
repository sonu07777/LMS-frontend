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