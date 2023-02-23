import { createSelector } from '@reduxjs/toolkit';

export const appSelector = (state) => state.app;
export const albumSelector = (state) => state.app.album;
export const searchSelector = (state) => state.search;
export const musicSelector = (state) => state.music;
export const audioSelector = (state) => state.audio;

export const currentSongSelector = createSelector(
   (state) => state.music.currentIndex,
   (state) => state.music.playlistSongs,
   (currentIndex, playlistSongs) => {
      return playlistSongs[currentIndex];
   },
);
