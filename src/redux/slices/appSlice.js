import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

import zingApis from '~/axios/zingApis';

const initialState = {
   loading: false,
   error: false,
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

      // chỉnh sửa kích thước ảnh
      const prevData = res.data;

      const newData = {
         ...prevData,
         thumbnailM: prevData.thumbnailM.replace('w320', 'w600'),
      };

      return newData;
   },
);

export const { clearHomeData, clearAlbumData } = appSlice.actions;

export default appSlice;
