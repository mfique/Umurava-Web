"use client";

import React, { useState } from "react";

interface ChallengeData {
    id?: string;
    title: string;
    description: string;
    moneyPrize: number;
    deadline: string;
    status: "open" | "ongoing" | "completed";
}

interface CreateChallengeFormProps {
    initialData?: ChallengeData;
    onSubmit: (data: ChallengeData) => void;
}

const CreateChallengeForm: React.FC<CreateChallengeFormProps> = ({
                                                                     initialData = { title: "", description: "", moneyPrize: 0, deadline: "", status: "open" },
                                                                     onSubmit
                                                                 }) => {
    const [challengeData, setChallengeData] = useState<ChallengeData>(initialData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setChallengeData({
            ...challengeData,
            [name]: name === "moneyPrize" ? Number(value) : value,
        });
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!challengeData.title.trim()) newErrors.title = "Title is required";
        if (!challengeData.description.trim()) newErrors.description = "Description is required";
        if (challengeData.moneyPrize <= 0) newErrors.moneyPrize = "Prize amount must be greater than zero";
        if (!challengeData.deadline) newErrors.deadline = "Deadline is required";
        if (!challengeData.status) newErrors.status = "Status is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(challengeData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Challenge Title:
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={challengeData.title}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={challengeData.description}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="moneyPrize" className="block text-sm font-medium text-gray-700">
                    Money Prize:
                </label>
                <input
                    type="number"
                    id="moneyPrize"
                    name="moneyPrize"
                    value={challengeData.moneyPrize}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.moneyPrize && <p className="text-red-500 text-sm">{errors.moneyPrize}</p>}
            </div>

            <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                    Deadline:
                </label>
                <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={challengeData.deadline}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.deadline && <p className="text-red-500 text-sm">{errors.deadline}</p>}
            </div>

            {/* Status Dropdown */}
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status:
                </label>
                <select
                    id="status"
                    name="status"
                    value={challengeData.status}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                    <option value="open">Open</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                </select>
                {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
            </div>

            <div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                >
                    {initialData.id ? "Update Challenge" : "Create Challenge"}
                </button>
            </div>
        </form>
    );
};

export default CreateChallengeForm;
