import axiosClient from './axiosClient';

const zingServices = {
   searchSuggest: (query) => {
      return axiosClient.get(`/suggestion-keyword?keyword=${query}`);
   },
   recommendKeywords: () => {
      return axiosClient.get('/recommend-keyword');
   },
   getHome: () => {
      return axiosClient.get('/home');
   },
};

export default zingServices;