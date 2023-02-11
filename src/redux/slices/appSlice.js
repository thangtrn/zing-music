import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

import zingApis from '~/axios/zingApis';

const album = {
   playlist: {},
   suggest: [],
};

const initialState = {
   loading: false,
   error: false,
   home: [],
   album: album,
};

const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      clearHomeData: (state) => {
         state.home = [];
      },
      clearAlbumData: (state) => {
         state.album = album;
      },
   },
   extraReducers: (builder) => {
      builder
         .addMatcher(
            isAnyOf(fetchHome.pending, fetchAlbum.pending),
            (state) => {
               state.loading = true;
               state.error = false;
            },
         )
         .addMatcher(
            isAnyOf(fetchHome.rejected, fetchAlbum.rejected),
            (state) => {
               state.loading = false;
               state.error = true;
            },
         )
         .addMatcher(isAnyOf(fetchHome.fulfilled), (state, action) => {
            state.loading = false;
            state.error = false;
            state.home = action.payload?.items || [];
         })
         .addMatcher(isAnyOf(fetchAlbum.fulfilled), (state, action) => {
            state.loading = false;
            state.error = false;
            state.album.playlist = action.payload.playlist || {};
            state.album.suggest = action.payload.suggest || [];
         });
   },
});

// -------------- ACTIONS --------------

export const fetchHome = createAsyncThunk('app/fetchHomeData', async () => {
   const res = await zingApis.getHome();
   // console.log('Home data: ', res.data.items);
   return res.data;
});

export const fetchAlbum = createAsyncThunk(
   'app/fetchAlbumData',
   async (payload) => {
      const res1 = await zingApis.getAlbum(payload);

      const res2 = await zingApis.getSuggestAlbum(payload);

      return {
         playlist: resizeImage(res1.data),
         suggest: res2.data,
      };
   },
);

const resizeImage = (data, prevSize = 'w320', replaceSize = 'w600') => {
   return {
      ...data,
      thumbnailM: data.thumbnailM.replace(prevSize, replaceSize),
   };
};

export const { clearHomeData, clearAlbumData } = appSlice.actions;

export default appSlice;
