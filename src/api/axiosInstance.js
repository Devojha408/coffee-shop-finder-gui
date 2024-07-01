import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Change this to your server's URL if deployed
});

export default axiosInstance;
