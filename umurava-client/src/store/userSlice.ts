import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await axios.get('/api/user');
    return response.data;
});

export const fetchDashboardStats = createAsyncThunk('user/fetchDashboardStats', async () => {
    const response = await axios.get('/api/dashboard-stats');
    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        dashboardStats: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(fetchDashboardStats.fulfilled, (state, action) => {
                state.dashboardStats = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                console.error('Error fetching user data:', action.error);
                // Handle the error, e.g., display an error message to the user
            })
            .addCase(fetchDashboardStats.rejected, (state, action) => {
                console.error('Error fetching dashboard stats:', action.error);
                // Handle the error, e.g., display an error message to the user
            });
    },
});

export default userSlice.reducer;