import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        // token.set(data.token);
        return data;
    } catch (error) {
        
    }
});

console.log(register);

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        // token.set(data.token);
        return data;
    } catch (error) {
        
    }
});

console.log(logIn);

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        // token.unset();
    } catch (error) {
        
    }
});

console.log(logOut);

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
        console.log('Токена нет, уходим из fetchCurrentUser');
        return thunkAPI.rejectWithValue();
        }

        // token.set(persistedToken);
        try {
        const { data } = await axios.get('/users/current');
        return data;
        } catch (error) {
        // TODO: Добавить обработку ошибки error.message
        }
    },
);

const operations = {
    register,
    logOut,
    logIn,
    fetchCurrentUser,
};
export default operations;