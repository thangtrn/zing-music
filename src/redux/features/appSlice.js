import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import zingServices from '../../axios/zingServices';

const initialState = {
   loading: false,
   error: '',
   home: {
      banner: [],
      playlist: {},
      newRelease: {},
   },
   chart: {
      weekChart: {},
      RTChart: {},
   },
};

const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchHome.pending, (state) => {
            state.loading = true;
            state.error = '';
         })
         .addCase(fetchHome.rejected, (state) => {
            state.loading = false;
            state.error = 'error';
         })
         .addCase(fetchHome.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.home.banner = action.payload?.items[0]?.items || [];
            state.home.playlist = action.payload?.items[2] || {};
         });
   },
});

// -------------- ACTIONS --------------

export const fetchHome = createAsyncThunk('app/fetchHomeData', async () => {
   const res = await zingServices.getHome();
   return res.data;
});

export default appSlice;
