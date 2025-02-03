"use client";

type Challenge = {
    id: string;
    title: string;
    description: string;
    moneyPrize: number;
    deadline: string;
};

interface RecentChallengesProps {
    challenges: Challenge[];
}

export const RecentChallenges = ({ challenges }: RecentChallengesProps) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Recent Challenges</h2>
            <ul className="space-y-2">
                {challenges.map((challenge: Challenge) => ( // ✅ Explicitly type challenge
                    <li key={challenge.id} className="p-4 border rounded-md shadow-md">
                        <h3 className="font-semibold">{challenge.title}</h3>
                        <p className="text-sm text-gray-500">Prize: ${challenge.moneyPrize}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
