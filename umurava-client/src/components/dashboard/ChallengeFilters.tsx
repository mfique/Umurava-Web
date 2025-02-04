"use client";

import React, { useState } from "react";

type ChallengeFilters = {
    status?: "open" | "completed" | "ongoing" | "";
};

interface ChallengeFiltersProps {
    filters: ChallengeFilters;
    onFilterChange: (newFilters: ChallengeFilters) => void;
}

const ChallengeFilters: React.FC<ChallengeFiltersProps> = ({ filters, onFilterChange }) => {
    const [selectedStatus, setSelectedStatus] = useState<ChallengeFilters>(filters);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value as ChallengeFilters["status"];
        setSelectedStatus({ status: newStatus });
        onFilterChange({ status: newStatus });
    };

    return (
        <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
            <select
                value={selectedStatus.status ?? ""}
                onChange={handleChange}
                className="ml-2 border border-gray-300 p-2 rounded-md"
            >
                <option value="">All</option>
                <option value="open">Open</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
            </select>
        </div>
    );
};

export default ChallengeFilters;
