import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// First, create the thunk
export const fetchAllContacts = createAsyncThunk(
    'contacts/getAllContacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/contacts`)
            console.log(response);
            return response.data

        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`/contacts`, contact)
            // dispatch(addContact())
            console.log(response);

        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.delete(`/contacts/${id}`)
            dispatch(deleteContact())
            console.log(response);
            
        } catch (error) {
            return rejectWithValue(error) 
        }
    }
)