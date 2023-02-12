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
   getPlaylist: (encodeId) => {
      return axiosClient.get(`/playlist/${encodeId}`);
   },
   getSuggestPlaylist: (encodeId) => {
      return axiosClient.get(`/suggest-playlist/${encodeId}`);
   },
   getSong: (encodeId) => {
      return axiosClient.get(`/song/${encodeId}`);
   },
};

export default zingServices;
