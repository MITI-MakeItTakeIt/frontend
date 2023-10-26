import axios from "axios";


const axiosUrl = axios.create({
    baseURL: "http://api.makeittakeit.kr",
    //   "Content-Type": "application/json",
});

axiosUrl.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});



export default axiosUrl;
