import React from 'react';

const StatCard = ({ title, value, percentage }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
            <span className="text-gray-500">{percentage}%</span>
        </div>
    );
};

export default StatCard;