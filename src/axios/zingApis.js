import axiosClient from './axiosClient';

const zingApis = {
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
   getSong: (id) => {
      return axiosClient.get(`/song/${id}`);
   },
   getSongInfo: (id) => {
      return axiosClient.get(`/song-info/${id}`);
   },
};

export default zingApis;
