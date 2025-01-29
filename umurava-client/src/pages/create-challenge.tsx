import React from 'react';
import { CreateChallengeForm } from '@/components/dashboard/CreateChallengeForm';

const CreateChallengePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Challenge</h1>
            <CreateChallengeForm />
        </div>
    );
};

export default CreateChallengePage;