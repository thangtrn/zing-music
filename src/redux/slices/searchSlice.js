import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import zingApis from '~/axios/zingApis';

const initialState = {
   loading: false,
   value: '',
   recommendKeywords: [],
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
         })
         .addCase(fetchRecommendKeywords.fulfilled, (state, action) => {
            state.recommendKeywords = action.payload || [];
         });
   },
});

export const { setValue, clearResult } = searchSlice.actions;

export const fetchSearchSuggest = createAsyncThunk(
   'search/fetchSearchSuggest',
   async (payload) => {
      const res = await zingApis.searchSuggest(payload);
      // console.log(res.data);
      return res.data;
   },
);

export const fetchRecommendKeywords = createAsyncThunk(
   'search/fetchRecommendKeywords',
   async () => {
      const res = await zingApis.recommendKeywords();
      // console.log(res.data);
      return res.data;
   },
);

export default searchSlice.reducer;
