"use client";

import {ChallengeCard} from "@/components/dashboard/ChallengeCard";

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
        <div>
            <h3 className="text-xl font-semibold mb-4">Recent Challenges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.slice(0, 3).map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge}/>
                ))}
            </div>
        </div>
    );
};
