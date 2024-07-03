import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://ec2-43-204-218-94.ap-south-1.compute.amazonaws.com:5000/api', // Change this to your server's URL if deployed
});

export default axiosInstance;
