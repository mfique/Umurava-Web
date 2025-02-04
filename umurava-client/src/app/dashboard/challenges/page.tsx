"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenges, setChallengeFilters } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";
import ChallengeFilters from "@/components/dashboard/ChallengeFilters";
import { ChallengeCard } from "@/components/dashboard/ChallengeCard";
import Link from "next/link";

const ChallengesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { challenges, filters, loading, error } = useSelector((state: RootState) => state.challenges);

    // Fetch challenges when component mounts or filters change
    useEffect(() => {
        dispatch(fetchChallenges(filters));
    }, [dispatch, filters]);

    // Handle filter changes
    const handleFilterChange = (newFilters: Partial<typeof filters>) => {
        dispatch(setChallengeFilters({ ...filters, ...newFilters }));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Challenges & Hackathons</h1>
            <p className="text-gray-500 mb-4">Join a challenge or a hackathon to gain valuable work experience.</p>

            {/* Filter Buttons */}
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => handleFilterChange({ status: "" })}
                    className={`px-4 py-2 rounded-md ${filters.status === "" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                    All Challenges
                </button>
                <button
                    onClick={() => handleFilterChange({ status: "completed" })}
                    className={`px-4 py-2 rounded-md ${filters.status === "completed" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                    Completed
                </button>
                <button
                    onClick={() => handleFilterChange({ status: "open" })}
                    className={`px-4 py-2 rounded-md ${filters.status === "open" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                    Open
                </button>
                <button
                    onClick={() => handleFilterChange({ status: "ongoing" })}
                    className={`px-4 py-2 rounded-md ${filters.status === "ongoing" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                    Ongoing
                </button>
            </div>

            {/* Create Challenge Button */}
            <div className="mb-6">
                <Link href="/dashboard/challenges/create">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        + Create New Challenge
                    </button>
                </Link>
            </div>

            {/* Filters Component */}
            <ChallengeFilters filters={filters} onFilterChange={handleFilterChange} />

            {/* Loading & Error State */}
            {loading && <p className="text-center mt-4">Loading challenges...</p>}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            {/* Challenges List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>
        </div>
    );
};

export default ChallengesPage;
