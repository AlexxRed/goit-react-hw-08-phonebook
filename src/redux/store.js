import { configureStore } from '@reduxjs/toolkit';
import {contactsSlice} from './contactsSlice';
import logger from 'redux-logger';


export const store = configureStore({
    reducer: {
        [contactsSlice.name]: contactsSlice.reducer,
    },
    middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
        // contactsApi.middleware,
        logger
    ],
});
console.log(store);