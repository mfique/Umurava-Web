import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"; // Ensure correct import for RootState

// Define Challenge type
interface Challenge {
    id: string;
    title: string;
    description: string;
    status: "open" | "completed" | "ongoing";
    moneyPrize: number;
    deadline: string;
    duration: number;
}

// Define Filters type
interface ChallengeFilters {
    status?: "open" | "completed" | "ongoing" | ""; // Optional filter for challenge status
}

// Define Redux state structure
interface ChallengeState {
    challenges: Challenge[];
    selectedChallenge: Challenge | null; // New state for selected challenge
    filters: ChallengeFilters;
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: ChallengeState = {
    challenges: [],
    selectedChallenge: null, // Initial state for selected challenge
    filters: { status: "" }, // Default filter (show all challenges)
    loading: false,
    error: null,
};

// Async Thunk: Fetch challenges from API with filters
export const fetchChallenges = createAsyncThunk<Challenge[], ChallengeFilters, { state: RootState }>(
    "challenges/fetchChallenges",
    async (filters) => {
        const queryParams = new URLSearchParams();
        if (filters.status) queryParams.append("status", filters.status);

        const response = await fetch(`/api/challenges?${queryParams.toString()}`);
        if (!response.ok) throw new Error("Failed to fetch challenges");

        return response.json();
    }
);

// Async Thunk: Fetch details of a specific challenge
export const fetchChallengeDetails = createAsyncThunk<Challenge, string>(
    "challenges/fetchChallengeDetails",
    async (id) => {
        const response = await fetch(`/api/challenges/${id}`);
        if (!response.ok) throw new Error("Failed to fetch challenge details");

        return response.json();
    }
);

// Create Slice
const challengesSlice = createSlice({
    name: "challenges",
    initialState,
    reducers: {
        // Set challenge filters (status)
        setChallengeFilters: (state, action: PayloadAction<ChallengeFilters>) => {
            state.filters = action.payload;
        },

        // Create a new challenge
        createChallenge: (state, action: PayloadAction<Challenge>) => {
            state.challenges.push(action.payload);
        },

        // Update an existing challenge (for example, after editing)
        updateChallenge: (state, action: PayloadAction<Challenge>) => {
            const index = state.challenges.findIndex(challenge => challenge.id === action.payload.id);
            if (index !== -1) {
                state.challenges[index] = action.payload;
            }
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
                state.error = action.error.message || "Failed to fetch challenges";
            })
            .addCase(fetchChallengeDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallengeDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedChallenge = action.payload; // Store selected challenge
            })
            .addCase(fetchChallengeDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch challenge details";
            });
    },
});

//  Export actions & reducer
export const { setChallengeFilters, createChallenge, updateChallenge } = challengesSlice.actions;
export default challengesSlice.reducer;
