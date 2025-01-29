import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChallenges = createAsyncThunk(
    'challenges/fetchChallenges',
    async (filters) => {
        const response = await axios.get('/api/challenges', { params: filters });
        return response.data;
    }
);

export const fetchChallengeDetails = createAsyncThunk(
    'challenges/fetchChallengeDetails',
    async (id) => {
        const response = await axios.get(`/api/challenges/${id}`);
        return response.data;
    }
);

export const createChallenge = createAsyncThunk(
    'challenges/createChallenge',
    async (challengeData) => {
        const response = await axios.post('/api/challenges', challengeData);
        return response.data;
    }
);

export const updateChallenge = createAsyncThunk(
    'challenges/updateChallenge',
    async ({ id, ...updatedData }) => {
        const response = await axios.put(`/api/challenges/${id}`, updatedData);
        return response.data;
    }
);

export const deleteChallenge = createAsyncThunk(
    'challenges/deleteChallenge',
    async (id) => {
        const response = await axios.delete(`/api/challenges/${id}`);
        return id;
    }
);

const challengeSlice = createSlice({
    name: 'challenges',
    initialState: {
        challenges: [],
        selectedChallenge: null,
        filters: {
            status: '',
            // Add other filters as needed
        },
        loading: false,
        error: null,
    },
    reducers: {
        setChallengeFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChallenges.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallenges.fulfilled, (state, action) => {
                state.loading = false;
                state.challenges = action.payload;
            })
            .addCase(fetchChallenges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchChallengeDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallengeDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedChallenge = action.payload;
            })
            .addCase(fetchChallengeDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createChallenge.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createChallenge.fulfilled, (state, action) => {
                state.loading = false;
                state.challenges.push(action.payload);
            })
            .addCase(createChallenge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateChallenge.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateChallenge.fulfilled, (state, action) => {
                state.loading = false;
                const updatedChallengeIndex = state.challenges.findIndex((c) => c.id === action.payload.id);
                if (updatedChallengeIndex !== -1) {
                    state.challenges[updatedChallengeIndex] = action.payload;
                }
            })
            .addCase(updateChallenge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteChallenge.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteChallenge.fulfilled, (state, action) => {
                state.loading = false;
                state.challenges = state.challenges.filter((challenge) => challenge.id !== action.payload);
                state.selectedChallenge = null; // Clear selected challenge if deleted
            })
            .addCase(deleteChallenge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default challengeSlice.reducer;