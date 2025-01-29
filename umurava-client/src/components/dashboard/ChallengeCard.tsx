
import React from 'react';
import Link from 'next/link';

const ChallengeCard = ({ challenge }) => {
    return (
        <Link href={`/challenge/${challenge.id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-150">
                <div className="flex justify-center mb-4">{/* ... (Logo or company icon) */}</div>
                <h3 className="text-lg font-semibold">{challenge.title}</h3>
                {/* Display skills, seniority level, timeline, etc. */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4">View Challenge</button>
            </div>
        </Link>
    );
};

export default ChallengeCard;