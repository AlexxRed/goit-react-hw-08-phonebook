import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer }  from './contactsSlice';
import authSliceReducer from './auth/authSlice'
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
        contacts: contactsSliceReducer,
        userAuth: authSliceReducer,
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