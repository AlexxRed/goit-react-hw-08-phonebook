import { configureStore } from '@reduxjs/toolkit';
import {contactsSlice} from './contactsSlice';
import logger from 'redux-logger';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


export const store = configureStore({
    reducer: {
        [contactsSlice.name]: contactsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ),logger]
});

export const persistor = persistStore(store);
console.log(store);