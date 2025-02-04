"use client";

import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // ✅ Correct way to get params
import { useSelector, useDispatch } from "react-redux";
import { fetchChallengeDetails, updateChallenge } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";
import { CreateChallengeForm } from "@/components/dashboard/CreateChallengeForm";
import { Challenge } from "@/types/challenge"; // Ensure this type exists

const EditChallengePage = () => {
    const router = useRouter();
    const { id } = useParams(); // ✅ Correct way to get dynamic params in Next.js App Router
    const dispatch = useDispatch<AppDispatch>();
    const challenge = useSelector((state: RootState) => state.challenges.selectedChallenge);

    // Fetch challenge details when the component mounts
    useEffect(() => {
        if (id) {
            dispatch(fetchChallengeDetails(id as string));
        }
    }, [dispatch, id]);

    // ✅ Ensure TypeScript recognizes the expected parameter type
    const handleUpdate = async (updatedData: Challenge) => {
        try {
            dispatch(updateChallenge({...updatedData}));
            router.push(`/dashboard/challenges/${id}`); // ✅ Redirect after update
        } catch (error) {
            console.error("Error updating challenge:", error);
        }
    };

    if (!challenge) {
        return <div className="text-center text-gray-600">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Challenge</h2>
            <CreateChallengeForm initialData={challenge} onSubmit={handleUpdate} />
        </div>
    );
};

export default EditChallengePage;
