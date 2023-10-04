import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const AuthpersistedReducer = persistReducer(persistConfig, authSlice);
// const CounterpersistedReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
  reducer: {
    auth: AuthpersistedReducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
