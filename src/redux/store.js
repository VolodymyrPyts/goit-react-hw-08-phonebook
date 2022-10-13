import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/slice';
import { authReduser } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    auth: persistReducer(
      {
        key: 'auth',
        storage,
        whitelist: ['token'],
      },
      authReduser
    ),

    contacts: contactsReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
