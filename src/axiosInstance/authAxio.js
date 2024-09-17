import axios from "axios";

const axiosInstance = axios.create();
BASE_URL = "https://localhost:5014";

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

