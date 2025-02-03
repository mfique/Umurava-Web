"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchChallenges } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";
import Link from "next/link";
import ChallengeFilters from "@/components/dashboard/ChallengeFilters"; // Import ChallengeFilters component

const ChallengesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { challenges, loading } = useSelector((state: RootState) => state.challenges);
    const [filters, setFilters] = useState({ status: "" }); // Initial filters state

    // Fetch challenges on mount
    useEffect(() => {
        dispatch(fetchChallenges());
    }, [dispatch]);

    // Handle filter change
    const handleFilterChange = (newFilters: { status: string }) => {
        setFilters(newFilters);
    };

    // Helper function to check if a challenge is ongoing
    const isOngoing = (deadline: string) => {
        const currentDate = new Date();
        const challengeDeadline = new Date(deadline);
        return challengeDeadline > currentDate;
    };

    // Filter challenges based on selected status
    const filteredChallenges = challenges.filter((challenge) => {
        if (filters.status === "ongoing") {
            return isOngoing(challenge.deadline);
        }
        return !(filters.status && challenge.status !== filters.status);

    });

    if (loading) return <p className="text-center mt-4">Loading challenges...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">All Challenges</h1>

            {/* Challenge Filters */}
            <ChallengeFilters filters={filters} onFilterChange={handleFilterChange} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredChallenges.length > 0 ? (
                    filteredChallenges.map((challenge) => (
                        <div key={challenge.id} className="border p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold">{challenge.title}</h2>
                            <p className="text-gray-500">💰 Prize: ${challenge.moneyPrize}</p>
                            <Link href={`/challenges/${challenge.id}`}>
                                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No challenges available.</p>
                )}
            </div>
        </div>
    );
};

export default ChallengesPage;
