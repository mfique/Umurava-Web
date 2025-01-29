import React from 'react';
import ChallengeCard from './ChallengeCard';

const ChallengeList = ({ challenges }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
};

export default ChallengeList;