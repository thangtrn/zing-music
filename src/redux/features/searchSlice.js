import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import zingServices from '../../axios/zingServices';

const initialState = {
   loading: false,
   value: '',
   result: {
      keywords: [],
      suggestions: [],
   },
};

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setValue: (state, action) => {
         state.value = action.payload;
      },
      clearResult: (state) => {
         state.result = {
            keywords: [],
            suggestions: [],
         };
         state.loading = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchSuggest.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchSearchSuggest.rejected, (state) => {
            state.loading = false;
         })
         .addCase(fetchSearchSuggest.fulfilled, (state, action) => {
            state.loading = false;
            state.result.keywords = action.payload?.items[0]?.keywords || [];
            state.result.suggestions =
               action.payload?.items[1]?.suggestions || [];
         });
   },
});

export const { setValue, clearResult } = searchSlice.actions;

export const fetchSearchSuggest = createAsyncThunk(
   'search/fetchSearchSuggest',
   async (payload) => {
      console.log(payload);
      const res = await zingServices.searchSuggest(payload);
      console.log(res.data);
      return res.data;
   },
);

export default searchSlice;
