import axios, { AxiosInstance } from "axios";


const axiosUrl: AxiosInstance = axios.create({
    baseURL: "http://api.makeittakeit.kr",
    headers: {
        "Content-Type": "application/json",
    }

});

axiosUrl.interceptors.request.use(function (config) {
    config.headers.Authorization = localStorage.getItem('access_token');
    return config;
});

export default axiosUrl;
