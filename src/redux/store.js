import { configureStore } from '@reduxjs/toolkit';

import appSlice from './slices/appSlice';
import searchSlice from './slices/searchSlice';
import musicSlice from './slices/musicSlice';
import audioSlice from './slices/audioSlice';

const store = configureStore({
   reducer: {
      search: searchSlice,
      app: appSlice,
      music: musicSlice,
      audio: audioSlice,
   },
});

export default store;
