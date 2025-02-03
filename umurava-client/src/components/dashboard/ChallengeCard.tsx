"use client";

type Challenge = {
    id: string;
    title: string;
    description: string;
    moneyPrize: number;
    deadline: string;
};

interface ChallengeCardProps {
    // Explicitly define the type of challenge
    challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200border my-2">
            <h2 className="text-lg font-semibold">{challenge.title}</h2>
            <p className="text-gray-600">{challenge.description.slice(0, 100)}...</p>
            <p className="text-sm text-gray-500">Deadline: {new Date(challenge.deadline).toLocaleDateString()}</p>
        </div>
    );
}
