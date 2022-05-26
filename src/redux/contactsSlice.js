import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
    items: [],
    filter: '',
    isLoading: true,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    filterContact: (state, action) => {
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



























console.log(contactsSlice);

export default contactsSlice.reducer;