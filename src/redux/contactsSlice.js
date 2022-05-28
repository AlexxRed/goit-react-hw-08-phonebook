import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContactApi, deleteContactApi } from './contactsOperations';

const initialState = {
    items: [],
    filter: '',
    isLoading: true,
    error: null,
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload;
        },
    },
    extraReducers: {
        [fetchAllContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchAllContacts.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchAllContacts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [addContactApi.fulfilled]: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        [addContactApi.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [addContactApi.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [deleteContactApi.fulfilled]: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        [deleteContactApi.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteContactApi.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})


export const { setFilter } = contactsSlice.actions;
console.log(contactsSlice.actions);


export const contactsSliceReducer = contactsSlice.reducer;


export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;