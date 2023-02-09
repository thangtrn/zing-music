import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

import zingApis from '~/axios/zingApis';

const initialState = {
   loading: false,
   error: '',
   home: [],
   album: {},
};

const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      clearHomeData: (state) => {
         state.home = [];
      },
      clearAlbumData: (state) => {
         state.album = {};
      },
   },
   extraReducers: (builder) => {
      builder
         .addMatcher(
            isAnyOf(fetchHome.pending, fetchAlbum.pending),
            (state) => {
               state.loading = true;
               state.error = '';
            },
         )
         .addMatcher(
            isAnyOf(fetchHome.rejected, fetchAlbum.rejected),
            (state) => {
               state.loading = false;
               state.error = 'error';
            },
         )
         .addMatcher(isAnyOf(fetchHome.fulfilled), (state, action) => {
            state.loading = false;
            state.error = '';
            state.home = action.payload?.items || [];
         })
         .addMatcher(isAnyOf(fetchAlbum.fulfilled), (state, action) => {
            state.loading = false;
            state.error = '';
            state.album = action.payload || {};
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
      const res = await zingApis.getAlbum(payload);
      console.log(res.data);

      return res.data;
   },
);

export const { clearHomeData, clearAlbumData } = appSlice.actions;

export default appSlice;
