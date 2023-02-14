import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import zingApis from '~/axios/zingApis';

const initialState = {
   loading: false,
   showPlaylist: false,
   isPlaying: false,
   currentIndex: 0,
   playlistSongs: [],
};

const musicSlice = createSlice({
   name: 'music',
   initialState,
   reducers: {
      setShowPlaylist: (state) => {
         state.showPlaylist = !state.showPlaylist;
      },
      setPlaylistSongs: (state, action) => {
         state.currentIndex =
            action.payload.playlist.findIndex(
               (item) => item.encodeId === action.payload.encodeId,
            ) || 0;
         state.playlistSongs =
            action.payload.playlist.filter(
               (item) => item.streamingStatus === 1,
            ) || [];
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPlaylist.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchPlaylist.rejected, (state) => {
            state.loading = false;
         })
         .addCase(fetchPlaylist.fulfilled, (state, action) => {
            state.loading = false;
            state.playlistSongs =
               action.payload.song.items.filter(
                  (item) => item.streamingStatus === 1,
               ) || [];
         });
   },
});

export const fetchPlaylist = createAsyncThunk(
   'music/fetchPlaylist',
   async (payload) => {
      const res = await zingApis.getPlaylist(payload);
      return res.data;
   },
);

export const { setShowPlaylist, setPlaylistSongs } = musicSlice.actions;

export default musicSlice.reducer;
