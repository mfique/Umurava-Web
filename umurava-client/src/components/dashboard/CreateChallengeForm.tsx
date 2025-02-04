"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
//import { createChallenge, updateChallenge } from "@/store/challengesSlice";

// Define allowed status values
type ChallengeStatus = "open" | "ongoing" | "completed";

interface Challenge {
    id: string;
    title: string;
    description: string;
    status: ChallengeStatus;
    moneyPrize: number;
    deadline: string;
    duration: number;
}

interface CreateChallengeFormProps {
    initialData?: Challenge; // The form will use initialData if provided
    onSubmit: (challengeData: Challenge) => void; // Function to handle form submission
}

export const CreateChallengeForm = ({ initialData, onSubmit }: CreateChallengeFormProps) => {
    const dispatch = useDispatch<AppDispatch>();

    // Set the form state, using initialData if provided, or default values
    const [formData, setFormData] = useState<Challenge>({
        id: initialData?.id || "",
        title: initialData?.title || "",
        moneyPrize: initialData?.moneyPrize || 0,
        description: initialData?.description || "",
        deadline: initialData?.deadline || "",
        status: initialData?.status || "open",
        duration: initialData?.duration || 0,
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "moneyPrize" || name === "duration" ? Number(value) || 0 : value, // Convert to number
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData); // Calls the function passed from the parent component
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Money Prize</label>
                <input
                    type="number"
                    name="moneyPrize"
                    value={formData.moneyPrize}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Duration (days)</label>
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Deadline</label>
                <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                >
                    <option value="open">Open</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
                {initialData ? "Update Challenge" : "Create Challenge"}
            </button>
        </form>
    );
};
