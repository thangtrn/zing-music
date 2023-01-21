import { configureStore } from '@reduxjs/toolkit';

import appSlice from './features/appSlice';
import searchSlice from './features/searchSlice';

const store = configureStore({
   reducer: {
      search: searchSlice.reducer,
      app: appSlice.reducer,
   },
});

export default store;
