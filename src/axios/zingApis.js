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
   getAlbum: (encodeId) => {
      return axiosClient.get(`/playlist/${encodeId}`);
   },
   getSuggestAlbum: (encodeId) => {
      return axiosClient.get(`/suggest-playlist/${encodeId}`);
   },
};

export default zingServices;
