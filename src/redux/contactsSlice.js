import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact } from './contactsOperations';

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
        state.filter = action.payload.text;
        },
    },
    extraReducers: {
        [fetchAllContacts.fulfilled]: (state, action) => {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
                error: null,
            };
        },
        [fetchAllContacts.pending]: (state) => {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        },
        [fetchAllContacts.rejected]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },
// with IMMER
        [addContact.fulfilled]: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        [addContact.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [addContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.fulfilled]: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        [deleteContact.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteContact.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})


export const { setFilter } = contactsSlice.actions;
console.log(contactsSlice.actions);


export default contactsSlice.reducer;
console.log(contactsSlice.reducer);

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;