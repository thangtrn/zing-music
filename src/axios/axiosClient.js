import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://zing-api-vercel.vercel.app/api',
   // baseURL: 'http://localhost:5000/api',
   headers: {
      'content-type': 'application/json',
   },
});

axiosClient.interceptors.request.use(async (config) => {
   // Handle token here ...
   return config;
});
axiosClient.interceptors.response.use((response) => {
   if (response && response.data) {
      return response.data;
   }
   return response;
});

export default axiosClient;
