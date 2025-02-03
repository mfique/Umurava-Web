"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createChallenge } from "@/store/challengesSlice";
import { AppDispatch } from "@/store/store"; // ✅ Import AppDispatch

export const CreateChallengeForm = () => {
    const dispatch = useDispatch<AppDispatch>(); // ✅ Typed dispatch

    // State to hold form data
    const [formData, setFormData] = useState({
        title: "",
        moneyPrize: "",
        description: "",
        deadline: "", // ✅ Added deadline field
    });

    // Handle change in form fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Dispatch the createChallenge action
        dispatch(
            createChallenge({
                //Will be generated to the backend
                id: "",
                title: formData.title,
                description: formData.description,
                moneyPrize: Number(formData.moneyPrize), // ✅ Convert to number
                deadline: formData.deadline // ✅ Pass deadline
            })
        );

        // Optionally reset the form after submission (if desired)
        setFormData({
            title: "",
            moneyPrize: "",
            description: "",
            deadline: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            {/* Title Input */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Money Prize Input */}
            <div>
                <label htmlFor="moneyPrize" className="block text-sm font-medium text-gray-700">Money Prize</label>
                <input
                    type="number"
                    name="moneyPrize"
                    value={formData.moneyPrize}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Description Input */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Deadline Input */}
            <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
                Create Challenge
            </button>
        </form>
    );
};
