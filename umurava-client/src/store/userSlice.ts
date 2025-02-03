import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Declare the User interface here
export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

// Define the Dashboard Stats Type
interface DashboardStats {
    totalChallenges: number;
    totalChallengesPercentage: number;
    totalParticipants: number;
    totalParticipantsPercentage: number;
    completedChallenges: number;
    completedChallengesPercentage: number;
    openChallenges: number;
    openChallengesPercentage: number;
    ongoingChallenges: number;
    ongoingChallengesPercentage: number;
}

// Initial State
interface UserState {
    user: User | null;
    dashboardStats: DashboardStats;
}

const initialState: UserState = {
    user: null,
    dashboardStats: {
        totalChallenges: 0,
        totalChallengesPercentage: 0,
        totalParticipants: 0,
        totalParticipantsPercentage: 0,
        completedChallenges: 0,
        completedChallengesPercentage: 0,
        openChallenges: 0,
        openChallengesPercentage: 0,
        ongoingChallenges: 0,
        ongoingChallengesPercentage: 0,
    },
};

// Async Thunks
export const fetchUserData = createAsyncThunk<User>(
    "user/fetchUserData",
    async () => {
        const response = await fetch("/api/user");
        return response.json();
    }
);

export const fetchDashboardStats = createAsyncThunk<DashboardStats>(
    "user/fetchDashboardStats",
    async () => {
        const response = await fetch("/api/dashboard-stats");
        return response.json();
    }
);

// User Slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(fetchDashboardStats.fulfilled, (state, action) => {
            state.dashboardStats = action.payload;
        });
    },
});

export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
