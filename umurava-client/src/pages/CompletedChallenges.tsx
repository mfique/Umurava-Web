import React from 'react';
import { useSelector } from 'react-redux';
import ChallengeCard from '../components/ChallengeCard';

const CompletedChallenges = () => {
    const { challenges } = useSelector((state) => state.challenges);
    const completedChallenges = challenges.filter((challenge) => challenge.status === 'completed');

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-xl font-semibold mb-4">Completed Challenges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {completedChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>
        </div>
    );
};

export default CompletedChallenges;