import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchAllContacts = createAsyncThunk(
    'contacts/getAllBooks',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get()
            return response.data
        } catch (error) {
            return rejectWithValue(error) 
        }

    }
)

 