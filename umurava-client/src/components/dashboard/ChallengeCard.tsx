"use client";

type Challenge = {
    id: string;
    title: string;
    description: string;
    moneyPrize: number;
    deadline: string;
};

interface ChallengeCardProps {
    challenge: Challenge; // ✅ Explicitly define the type of challenge
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
    return (
        <div className="border p-3 my-2 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{challenge.title}</h2>
            <p>{challenge.description}</p>
        </div>
    );
}
