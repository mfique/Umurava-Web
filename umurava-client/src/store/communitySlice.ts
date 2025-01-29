import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommunityData = createAsyncThunk(
    'community/fetchCommunityData',
    async () => {
        const response = await axios.get('/api/community');
        return response.data;
    }
);

const communitySlice = createSlice({
    name: 'community',
    initialState: {
        communityData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommunityData.fulfilled, (state, action) => {
                state.communityData = action.payload;
            });
    },
});

export default communitySlice.reducer;