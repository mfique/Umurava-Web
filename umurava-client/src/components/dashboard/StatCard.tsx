"use client";

interface StatCardProps {
    title: string;
    value: number | string;
    percentage: number;
}

export const StatCard = ({ title, value, percentage }: StatCardProps) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${percentage >= 0 ? "text-green-500" : "text-red-500"}`}>
                {percentage}%
            </p>
        </div>
    );
};
