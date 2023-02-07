import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
   },
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
            state.home = action.payload?.items || [];
         });
   },
});

// -------------- ACTIONS --------------

export const fetchHome = createAsyncThunk('app/fetchHomeData', async () => {
   const res = await zingApis.getHome();
   // console.log('Home data: ', res.data.items);
   return res.data;
});

export const { clearHomeData } = appSlice.actions;

export default appSlice;
