import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/gatProfileForm/gatProfileForm';

export const updateProfileData = createAsyncThunk<Profile,
    void,
    ThunkConfig<string>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkAPI;

            const formData = getProfileForm(getState());

            try {
                const response = await extra.api.put<Profile>('/profile', formData);

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
