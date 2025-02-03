import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the Challenge type
interface Challenge {
    id: string;
    title: string;
    description: string;
    moneyPrize: number;
    deadline: string;
    status: string;
}

interface ChallengesState {
    challenges: Challenge[];
    loading: boolean;
    error: string | null;
    challenge: Challenge | null;  // To store a single challenge's details
}

const initialState: ChallengesState = {
    challenges: [],
    loading: false,
    error: null,
    challenge: null,  // Initialize challenge as null
};

// Async thunk for fetching challenges
const fetchChallenges = createAsyncThunk<Challenge[]>(
    "challenges/fetchChallenges",
    async () => {
        const response = await fetch("/api/challenges");
        return response.json();
    }
);

// Async thunk for fetching a single challenge's details
const fetchChallengeDetails = createAsyncThunk<Challenge, string>(
    "challenges/fetchChallengeDetails",
    async (id: string) => {
        const response = await fetch(`/api/challenges/${id}`);
        return response.json();
    }
);

// Async thunk for creating a challenge
const createChallenge = createAsyncThunk<Challenge, Challenge>(
    "challenges/createChallenge",
    async (newChallenge: Challenge) => {
        const response = await fetch("/api/challenges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newChallenge),
        });
        return response.json();
    }
);

// Slice to manage challenges state
const challengesSlice = createSlice({
    name: "challenges",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChallenges.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchChallenges.fulfilled, (state, action) => {
            state.challenges = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchChallenges.rejected, (state, action) => {
            state.error = action.error.message ?? "Error fetching challenges";
            state.loading = false;
        });

        // Handle single challenge detail fetch
        builder.addCase(fetchChallengeDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchChallengeDetails.fulfilled, (state, action) => {
            state.challenge = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchChallengeDetails.rejected, (state, action) => {
            state.error = action.error.message ?? "Error fetching challenge details";
            state.loading = false;
        });

        // Handle creating a new challenge
        builder.addCase(createChallenge.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createChallenge.fulfilled, (state, action) => {
            state.challenges.push(action.payload); // Add the new challenge to the challenges list
            state.loading = false;
        });
        builder.addCase(createChallenge.rejected, (state, action) => {
            state.error = action.error.message ?? "Error creating challenge";
            state.loading = false;
        });
    },
});

export default challengesSlice.reducer;
export { fetchChallenges, fetchChallengeDetails, createChallenge }; // Export the createChallenge action
