// src/app/(admin)/case-studies/page.tsx

import { redirect } from "next/navigation";
import CaseStudyTable from "@/components/admin/CaseStudyTable";
import { getCaseStudies } from "@/lib/case-studies/data";
import { getServerSession } from "next-auth";

export default async function CaseStudiesAdminPage() {
    const session = await getServerSession();

    if (!session || session.user.role !== "admin") {
        redirect("/login");
    }

    const caseStudies = await getCaseStudies();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Manage Case Studies
                </h1>
                <a
                    href="/admin/case-studies/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                >
                    Add New Case Study
                </a>
            </div>

            <CaseStudyTable caseStudies={caseStudies} />
        </div>
    );
}
