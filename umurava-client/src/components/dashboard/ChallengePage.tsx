import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChallenges, setChallengeFilters } from '../store/challengeSlice';
import { ChallengeFilters, ChallengeList } from './';
import Link from 'next/link';

const ChallengePage = () => {
    const dispatch = useDispatch();
    const { challenges, filters } = useSelector((state) => state.challenges);

    useEffect(() => {
        dispatch(fetchChallenges(filters));
    }, [dispatch, filters]);

    const handleFilterChange = (newFilters) => {
        dispatch(setChallengeFilters(newFilters));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Challenges & Hackathons</h1>
            <p className="text-gray-500 mb-4">Join a challenge or a hackathon to gain valuable work experience.</p>
            <div className="flex space-x-4 mb-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">All Challenges</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-4 py-2">Completed Challenges</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-4 py-2">Open Challenges</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-4 py-2">Ongoing Challenges</button>
            </div>
            <Link href="/create-challenge">
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">+ Create New Challenge</button>
            </Link>
            <ChallengeFilters filters={filters} onFilterChange={handleFilterChange} />
            <ChallengeList challenges={challenges} />
        </div>
    );
};

export default ChallengePage;
