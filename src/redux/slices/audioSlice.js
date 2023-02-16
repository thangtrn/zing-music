import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
   name: 'audio',
   initialState: {
      isSeek: false,
      duration: 0,
      currentTime: 0,
      volume: 50,
      volumeBefore: 0,
   },
   reducers: {
      setDuration: (state, actions) => {
         state.duration = actions.payload;
      },
      setCurrentTime: (state, actions) => {
         state.currentTime = actions.payload;
      },
      setSeek: (state, actions) => {
         state.isSeek = actions.payload;
      },
      resetAudio: (state) => {
         state.isSeek = false;
         state.duration = 0;
         state.currentTime = 0;
      },
   },
});

export const { setDuration, setCurrentTime, setSeek, resetAudio } =
   audioSlice.actions;

export default audioSlice.reducer;
