import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
   name: 'setting',
   initialState: {
      openQueue: false,
   },
   reducers: {
      setOpenQueue: (state) => {
         state.openQueue = !state.openQueue;
      },
   },
});

export const { setOpenQueue } = settingSlice.actions;

export default settingSlice.reducer;
