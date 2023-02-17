import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import zingApis from '~/axios/zingApis';

const initialState = {
   loading: false,
   showPlaylist: false,
   isPlaying: false,
   isLoop: false,
   isShuffle: false,
   currentIndex: 0,
   currentSong: null,
   playlistId: '',
   playlistSongs: [],
   playlistInfo: {
      title: '',
      link: '',
   },
};

const musicSlice = createSlice({
   name: 'music',
   initialState,
   reducers: {
      nextSong: (state) => {
         if (state.playlistSongs.length - 1 === state.currentIndex) {
            state.currentIndex = 0;
         } else {
            state.currentIndex += 1;
         }

         state.currentSong = state.playlistSongs[state.currentIndex] || null;
      },
      prevSong: (state) => {
         if (state.currentIndex === 0) {
            state.currentIndex = state.playlistSongs.length - 1;
         } else {
            state.currentIndex -= 1;
         }

         state.currentSong = state.playlistSongs[state.currentIndex] || null;
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
      setPlay: (state, action) => {
         if (action.payload) {
            state.isPlaying = action.payload;
         } else {
            state.isPlaying = !state.isPlaying;
         }
      },
      setShowPlaylist: (state) => {
         state.showPlaylist = !state.showPlaylist;
      },
      setPlaySongWithId: (state, action) => {
         state.isPlaying = true;
         state.currentIndex =
            state.playlistSongs.findIndex(
               (item) => item.encodeId === action.payload,
            ) || 0;

         state.currentSong =
            state.playlistSongs.filter(
               (item) => item.encodeId === action.payload,
            )[0] || null;
      },
      setPlaylistSongs: (state, action) => {
         state.isPlaying = true;
         state.playlistId = '';

         state.currentIndex =
            action.payload.playlist.findIndex(
               (item) => item.encodeId === action.payload.encodeId,
            ) || 0;

         state.currentSong =
            action.payload.playlist.filter(
               (item) => item.encodeId === action.payload.encodeId,
            )[0] || null;

         state.playlistSongs =
            action.payload.playlist.filter(
               (item) => item.streamingStatus === 1,
            ) || [];

         state.playlistInfo = initialState.playlistInfo;
      },
      clearPlaylistSongs: (state) => {
         return {
            ...initialState,
         };
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(
         isAnyOf(fetchPlaylist.pending, fetchPlaylistAndPlayWithId.pending),
         (state) => {
            state.loading = true;
         },
      );
      builder.addMatcher(
         isAnyOf(fetchPlaylist.rejected, fetchPlaylistAndPlayWithId.rejected),
         (state) => {
            state.loading = false;
            state.isPlaying = false;
         },
      );
      builder.addMatcher(isAnyOf(fetchPlaylist.fulfilled), (state, action) => {
         state.loading = false;
         state.isPlaying = true;
         state.currentIndex = 0;
         state.playlistId = action.payload.encodeId;
         state.playlistSongs =
            action.payload.song.items.filter(
               (item) => item.streamingStatus === 1,
            ) || [];

         state.currentSong = state.playlistSongs[state.currentIndex];
         state.playlistInfo = {
            title: action.payload.title,
            link: action.payload.link.split('.')[0],
         };
      });
      builder.addMatcher(
         isAnyOf(fetchPlaylistAndPlayWithId.fulfilled),
         (state, action) => {
            state.loading = false;
            state.isPlaying = true;

            state.playlistId = action.payload.data.encodeId;
            state.playlistSongs =
               action.payload.data.song.items.filter(
                  (item) => item.streamingStatus === 1,
               ) || [];

            state.currentIndex =
               state.playlistSongs.findIndex(
                  (item) => item.encodeId === action.payload.songId,
               ) || 0;

            state.currentSong = state.playlistSongs[state.currentIndex];

            state.playlistInfo = {
               title: action.payload.data.title,
               link: action.payload.data.link.split('.')[0],
            };
         },
      );
   },
});

export const fetchPlaylist = createAsyncThunk(
   'music/fetchPlaylist',
   async (payload) => {
      const res = await zingApis.getPlaylist(payload);
      // console.log(res.data);
      return res.data;
   },
);

export const fetchPlaylistAndPlayWithId = createAsyncThunk(
   'music/fetchPlaylistAndPlayWithId',
   async ({ songId, playlistId }) => {
      // console.log('songId:' + songId);
      const res = await zingApis.getPlaylist(playlistId);
      return { data: res.data, songId: songId };
   },
);

export const {
   setPlay,
   nextSong,
   prevSong,
   setLoading,
   setShowPlaylist,
   setPlaylistSongs,
   setPlaySongWithId,
   clearPlaylistSongs,
} = musicSlice.actions;

export default musicSlice.reducer;
