import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChallengeDetails, updateChallenge, deleteChallenge } from '../../store/challengeSlice';
import { CreateChallengeForm } from '@/components/dashboard/CreateChallengeForm';

const ChallengeDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const challenge = useSelector((state) => state.challenges.selectedChallenge);

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchChallengeDetails(id as string));
        }
    }, [dispatch, id]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = async () => {
        try {
            await dispatch(deleteChallenge(id as string));
            router.push('/challenges');
        } catch (error) {
            console.error('Error deleting challenge:', error);
            // Handle the error (e.g., display an error message to the user)
        }
    };

    if (!challenge) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Challenge' : challenge.title}</h2>
            {isEditing ? (
                <CreateChallengeForm initialData={challenge} onSubmit={handleUpdate} />
            ) : (
                <>
                    {/* Display challenge details (read-only) */}
                    {/* ... (Display challenge details with Tailwind CSS styling) */}
                    <div className="flex justify-end">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">Edit</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 ml-4">Delete</button>
                    </div>
                    {/* ... (Participant list, etc.) */}
                </>
            )}
        </div>
    );
};

export default ChallengeDetails;