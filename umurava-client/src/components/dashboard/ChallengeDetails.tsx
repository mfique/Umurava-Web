"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallengeDetails } from "@/store/challengesSlice"; // Importing fetchChallengeDetails
import { RootState, AppDispatch } from "@/store/store"; // Correct types
import Link from "next/link";

const ChallengeDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    // Select challenge details from the Redux store
    const challenge = useSelector((state: RootState) => state.challenges.challenge);
    const loading = useSelector((state: RootState) => state.challenges.loading);
    const error = useSelector((state: RootState) => state.challenges.error);

    useEffect(() => {
        if (id) {
            dispatch(fetchChallengeDetails(id as string)); // Fetching the challenge details
        }
    }, [id, dispatch]);

    if (loading) return <p>Loading challenge details...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto p-6">
            {challenge ? (
                <div className="border p-6 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold mb-2">{challenge.title}</h1>
                    <p className="text-gray-600">{challenge.description}</p>
                    <p className="mt-2 text-gray-500">💰 Prize: ${challenge.moneyPrize}</p>
                    <p className="mt-2 text-gray-500">📅 Deadline: {challenge.deadline}</p>
                    <Link href="/challenges">
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Back to Challenges
                        </button>
                    </Link>
                </div>
            ) : (
                <p>Challenge not found.</p>
            )}
        </div>
    );
};

export default ChallengeDetails;
