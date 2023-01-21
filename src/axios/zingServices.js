import axiosClient from './axiosClient';

const zingServices = {
   searchSuggest: (query) => {
      // return axiosClient.get(`/suggestion-keyword?keyword=${query}`);
      return axiosClient.get(`/suggestion-keyword?keyword=${query}`);
   },
   getHome: () => {
      return axiosClient.get('/home');
   },
};

export default zingServices;
