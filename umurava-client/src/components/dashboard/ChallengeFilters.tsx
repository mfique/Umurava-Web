import React from 'react';

interface ChallengeFiltersProps {
    filters: {
        status: string;
    };
    onFilterChange: (newFilters: { status: string }) => void;
}

const ChallengeFilters = ({ filters, onFilterChange }: ChallengeFiltersProps) => {
    const handleFilterChange = (filterType: string, filterValue: string) => {
        onFilterChange({ ...filters, [filterType]: filterValue });
    };

    return (
        <div className="flex space-x-4 mb-4">
            {/* Status Filter */}
            <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"
            >
                <option value="">All</option>
                <option value="open">Open</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option> {/* Added Ongoing filter */}
            </select>
        </div>
    );
};

export default ChallengeFilters;
