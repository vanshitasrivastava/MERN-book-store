import axios from 'axios';

const API_BASE_URL=import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;