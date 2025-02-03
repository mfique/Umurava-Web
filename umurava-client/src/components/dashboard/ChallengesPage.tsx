"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Define a type for challenge objects
type Challenge = {
    id: string;
    title: string;
    moneyPrize: number;
};

const ChallengesPage = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([]); // Use the defined type
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/challenges")
            .then((res) => res.json())
            .then((data: Challenge[]) => {  // Tell TypeScript that data is an array of Challenge objects
                setChallenges(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading challenges...</p>;

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
