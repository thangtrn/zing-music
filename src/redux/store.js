import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appSlice from './slices/appSlice';
import searchSlice from './slices/searchSlice';
import musicSlice from './slices/musicSlice';
import audioSlice from './slices/audioSlice';

const musicPersistConfig = {
   key: 'music',
   storage,
   blacklist: ['loading', 'isPlaying', 'showPlaylist'],
};

const audioPersistConfig = {
   key: 'audio',
   storage,
   blacklist: ['isSeek, currentTime'],
};

const rootReducer = combineReducers({
   search: searchSlice,
   app: appSlice,
   music: persistReducer(musicPersistConfig, musicSlice),
   audio: persistReducer(audioPersistConfig, audioSlice),
});

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
