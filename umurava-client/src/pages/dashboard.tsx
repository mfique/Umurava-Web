import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, fetchChallenges, fetchDashboardStats } from '../store/userSlice';
import { RecentChallenges } from '@/components/dashboard/RecentChallenges';
import { UserAvatar } from '@/components/dashboard/UserAvatar';
import { StatCard } from '@/components/dashboard/StatCard';

const Dashboard: React.FC  = () => {
    const dispatch = useDispatch();
    const { user, dashboardStats } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchChallenges());
        dispatch(fetchDashboardStats());
    }, [dispatch]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <UserAvatar user={user} />
                    {/* ... other header elements */}
                </div>
                <h1 className="text-2xl font-bold mb-4">Welcome back, {user.name}!</h1>
                <p className="text-gray-500 mb-8">Build Work Experience Through Skills Challenges</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <StatCard title="Total Challenges" value={dashboardStats.totalChallenges} percentage={dashboardStats.totalChallengesPercentage} />
                    <StatCard title="Total Participants" value={dashboardStats.totalParticipants} percentage={dashboardStats.totalParticipantsPercentage} />
                    <StatCard title="Completed Challenges" value={dashboardStats.completedChallenges} percentage={dashboardStats.completedChallengesPercentage} />
                    <StatCard title="Open Challenges" value={dashboardStats.openChallenges} percentage={dashboardStats.openChallengesPercentage} />
                    <StatCard title="Ongoing Challenges" value={dashboardStats.ongoingChallenges} percentage={dashboardStats.ongoingChallengesPercentage} />
                </div>
                <RecentChallenges challenges={recentChallenges} />
            </div>
        </div>
    );
};

export default Dashboard;