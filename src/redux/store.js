import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from '@reduxjs/toolkit';

import contactReducer from './contacts/contactReducer';

import storage from 'redux-persist/lib/storage';
import { authSlice, authApi } from './auth';
import { contactsApi } from './contacts/contacts';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
