

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session = await getServerSession();

    if (!session || session.user.role !== "admin") {
        redirect("/login");
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Case Studies</h2>
                    <p className="text-gray-600 mb-4">
                        Manage the case study library
                    </p>
                    <a
                        href="/admin/case-studies"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        Manage
                    </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">
                        Recommendation Logic
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Configure the recommendation engine rules
                    </p>
                    <a
                        href="/admin/recommendation-rules"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        Configure
                    </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">
                        User Analytics
                    </h2>
                    <p className="text-gray-600 mb-4">
                        View usage patterns and feedback
                    </p>
                    <a
                        href="/admin/analytics"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        View Reports
                    </a>
                </div>
            </div>
        </div>
    );
}
