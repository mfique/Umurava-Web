"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenges } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";
import Link from "next/link";

const ChallengesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { challenges, loading } = useSelector((state: RootState) => state.challenges);

    useEffect(() => {
        dispatch(fetchChallenges());
    }, [dispatch]);

    if (loading) return <p className="text-center mt-4">Loading challenges...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">All Challenges</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.length > 0 ? (
                    challenges.map((challenge) => (
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
