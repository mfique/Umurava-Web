
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Dashboard from '../../pages/dashboard';
import Challenges from '../../pages/challenges';
import Community from '../../pages/community';

const DashboardLayout = () => {
    const router = useRouter();
    const [activePage, setActivePage] = useState('dashboard');

    const handlePageChange = (page) => {
        setActivePage(page);
        router.push(`/${page}`);
    };

    return (
        <div className="container mx-auto p-4">
            <nav className="flex space-x-4 mb-4">
                <Link href="/dashboard">
                    <button
                        className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ${activePage === 'dashboard' ? 'bg-blue-600' : ''}`}
                        onClick={() => handlePageChange('dashboard')}
                    >
                        Dashboard
                    </button>
                </Link>
                <Link href="/challenges">
                    <button
                        className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ${activePage === 'challenges' ? 'bg-blue-600' : ''}`}
                        onClick={() => handlePageChange('challenges')}
                    >
                        Challenges
                    </button>
                </Link>
                <Link href="/community">
                    <button
                        className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ${activePage === 'community' ? 'bg-blue-600' : ''}`}
                        onClick={() => handlePageChange('community')}
                    >
                        Community
                    </button>
                </Link>
            </nav>

            <div>
                {activePage === 'dashboard' && <Dashboard />}
                {activePage === 'challenges' && <Challenges />}
                {activePage === 'community' && <Community />}
            </div>
        </div>
    );
};

export default DashboardLayout;