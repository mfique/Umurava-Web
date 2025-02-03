"use client";

import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the dashboard components
const Dashboard = dynamic(() => import("@/app/dashboard/dashboard/page"));
const Challenges = dynamic(() => import("@/app/dashboard/challenges/page"));
const Community = dynamic(() => import("@/app/dashboard/community/page"));

const DashboardLayout = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handlePageChange = (page: string) => {
        router.push(`/dashboard/${page}`); // Ensure navigation works under `/dashboard`
    };

    return (
        <div className="container mx-auto p-4">
            <nav className="flex space-x-4 mb-4">
                <button
                    onClick={() => handlePageChange("dashboard")}
                    className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ${pathname === '/dashboard' ? 'bg-blue-600' : ''}`}
                >
                    Dashboard
                </button>
                <button
                    onClick={() => handlePageChange("challenges")}
                    className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ${pathname === '/dashboard/challenges' ? 'bg-blue-600' : ''}`}
                >
                    Challenges
                </button>
                <button
                    onClick={() => handlePageChange("community")}
                    className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ${pathname === '/dashboard/community' ? 'bg-blue-600' : ''}`}
                >
                    Community
                </button>
            </nav>
            <div>
                {/* Render the appropriate page component based on pathname */}
                {pathname === "/dashboard/dashboard" && <Dashboard />}
                {pathname === "/dashboard/challenges" && <Challenges />}
                {pathname === "/dashboard/community" && <Community />}
            </div>
        </div>
    );
};

export default DashboardLayout;
