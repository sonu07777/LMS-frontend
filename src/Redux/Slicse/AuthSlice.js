import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance/authAxio.js";
import toast from "react-hot-toast";
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("/register", data);
    toast.promise(res, {
      loading: "wait creating account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "failed to create account",
    });
    return (await res).data;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstance.post("/login", data);
    toast.promise(res, {
      loading: "Wait! authentication in progress...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log in",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});
export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
      const res = axiosInstance.post("v1/logout");
      // console.log("the response is :- ", res);
      // console.log("data is :- ",(await res).data);
      // console.log("message is :", (await res).data.message);
       
      toast.promise(res, {
          loading: "Wait! logout in progress...",
          success: (data) => {
              return data?.data?.message;
          },
          error: "Failed to log out"
      });
      return (await res).data;
  } catch(error) {
      toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(logout.fulfilled, (state, action) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = "";
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
