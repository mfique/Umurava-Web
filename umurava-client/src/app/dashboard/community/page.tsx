"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCommunityData } from "@/store/communitySlice";
import { AppDispatch } from "@/store/store";

const CommunityPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchCommunityData());
    }, [dispatch]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Community</h1>
            <div className="bg-white rounded-lg p-4 shadow-md">
                <p>Join our WhatsApp community to get notified on the latest projects and hackathons.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4">
                    Join WhatsApp Community
                </button>
            </div>
        </div>
    );
};

export default CommunityPage;
