import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'users/loginByUsername',
    async (authData, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            dispatch,
        } = thunkAPI;
        try {
            const response = await extra.api.post('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            extra.navigate?.('/about');

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
