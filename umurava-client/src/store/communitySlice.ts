import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CommunityState {
    communityData: { message: string };
}

const initialState: CommunityState = {
    communityData: { message: "Join our WhatsApp community for updates!" },
};

// Async Thunk to fetch community data
export const fetchCommunityData = createAsyncThunk("community/fetchCommunityData", async () => {
    const response = await fetch("/api/community");
    return response.json();
});

const communitySlice = createSlice({
    name: "community",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommunityData.fulfilled, (state, action) => {
            state.communityData = action.payload;
        });
    },
});

export default communitySlice.reducer;
