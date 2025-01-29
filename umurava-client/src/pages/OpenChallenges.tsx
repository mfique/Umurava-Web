import React from 'react';
import { useSelector } from 'react-redux';
import ChallengeCard from '@/components/dashboard/ChallengeCard';

const OpenChallenges = () => {
    const { challenges } = useSelector((state) => state.challenges);
    const openChallenges = challenges.filter((challenge) => challenge.status === 'open');

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-xl font-semibold mb-4">Open Challenges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {openChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>
        </div>
    );
};

export default OpenChallenges;