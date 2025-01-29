import React from 'react';

const ChallengeFilters = ({ filters, onFilterChange }) => {
    const handleFilterChange = (filterType, filterValue) => {
        onFilterChange({ ...filters, [filterType]: filterValue });
    };

    return (
        <div className="flex space-x-4 mb-4">
            <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"
            >
                <option value="">All</option>
                <option value="open">Open</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    );
};

export default ChallengeFilters;