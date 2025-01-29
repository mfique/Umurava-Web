import React, { useState } from 'react';

const CreateChallengeForm = ({ initialData = {}, onSubmit }) => {
    const [challengeData, setChallengeData] = useState(initialData);

    const handleChange = (e: { target: { name: never; value: never; }; }) => {
        setChallengeData({
            ...challengeData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(challengeData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            </div>
            <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Duration:
                </label>
                <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={challengeData.duration}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
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
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Contact Email:
                </label>
                <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={challengeData.contactEmail}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                    Project Description:
                </label>
                <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={challengeData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label htmlFor="projectBrief" className="block text-sm font-medium text-gray-700">
                    Project Brief:
                </label>
                <textarea
                    id="projectBrief"
                    name="projectBrief"
                    value={challengeData.projectBrief}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label htmlFor="projectDescriptionAndTasks" className="block text-sm font-medium text-gray-700">
                    Project Description & Tasks:
                </label>
                <textarea
                    id="projectDescriptionAndTasks"
                    name="projectDescriptionAndTasks"
                    value={challengeData.projectDescriptionAndTasks}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                >
                    {initialData.id ? 'Update Challenge' : 'Create Challenge'}
                </button>
            </div>
        </form>
    );
};

export default CreateChallengeForm;