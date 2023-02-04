import { configureStore } from '@reduxjs/toolkit';

import appSlice from './slices/appSlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
   reducer: {
      search: searchSlice.reducer,
      app: appSlice.reducer,
   },
});

export default store;
