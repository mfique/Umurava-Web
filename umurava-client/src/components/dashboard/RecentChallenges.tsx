import React from 'react';
import ChallengeCard from './ChallengeCard';

const RecentChallenges = ({ challenges }) => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recent Challenges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.slice(0, 3).map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4">See All</button>
        </div>
    );
};

export default RecentChallenges;