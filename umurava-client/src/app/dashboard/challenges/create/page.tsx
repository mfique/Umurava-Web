"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { createChallenge } from "@/store/challengesSlice";
import { UnknownAction } from "redux";

// Define allowed status values
type ChallengeStatus = "open" | "ongoing" | "completed";

const CreateChallengePage = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const [challengeData, setChallengeData] = useState({
        title: "",
        description: "",
        deadline: "",
        duration: "",
        moneyPrize: "",
        contactEmail: "",
        projectBrief: "",
        projectDescriptionAndTasks: "",
        status: "open" as ChallengeStatus, // ✅ Ensure proper status typing
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setChallengeData({
            ...challengeData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            dispatch(
                createChallenge({
                    id: "",
                    ...challengeData,
                    moneyPrize: Number(challengeData.moneyPrize), // Ensure number type
                    duration: Number(challengeData.duration), // Ensure number type
                    status: challengeData.status as ChallengeStatus // ✅ Ensuring correct type
                }) as UnknownAction
            );
            router.push("/challenges");
        } catch (error) {
            console.error("Error creating challenge:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Challenge</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Challenge Title:
                    </label>
                    <input type="text" id="title" name="title" value={challengeData.title} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                        Deadline:
                    </label>
                    <input type="date" id="deadline" name="deadline" value={challengeData.deadline} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                        Duration:
                    </label>
                    <input type="number" id="duration" name="duration" value={challengeData.duration} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="moneyPrize" className="block text-sm font-medium text-gray-700">
                        Money Prize:
                    </label>
                    <input type="number" id="moneyPrize" name="moneyPrize" value={challengeData.moneyPrize} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                        Contact Email:
                    </label>
                    <input type="email" id="contactEmail" name="contactEmail" value={challengeData.contactEmail} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="projectBrief" className="block text-sm font-medium text-gray-700">
                        Project Brief:
                    </label>
                    <textarea id="projectBrief" name="projectBrief" value={challengeData.projectBrief} onChange={handleChange} required rows={2} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="projectDescriptionAndTasks" className="block text-sm font-medium text-gray-700">
                        Project Description & Tasks:
                    </label>
                    <textarea id="projectDescriptionAndTasks" name="projectDescriptionAndTasks" value={challengeData.projectDescriptionAndTasks} onChange={handleChange} required rows={4} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Status:
                    </label>
                    <select name="status" value={challengeData.status} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md">
                        <option value="open">Open</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
                    Create Challenge
                </button>
            </form>
        </div>
    );
};

export default CreateChallengePage;
