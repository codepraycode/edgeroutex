// src/components/admin/CaseStudyTable.tsx
import { CaseStudy } from "@/lib/case-studies/data";
import Link from "next/link";

type CaseStudyTableProps = {
    caseStudies: CaseStudy[];
};

export default function CaseStudyTable({ caseStudies }: CaseStudyTableProps) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Environment
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {caseStudies.map((study) => (
                        <tr key={study.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {study.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {study.environment}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {study.description.length > 50
                                    ? `${study.description.substring(0, 50)}...`
                                    : study.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link
                                    href={`/admin/case-studies/${study.id}`}
                                    className="text-blue-600 hover:text-blue-900 mr-4"
                                >
                                    Edit
                                </Link>
                                <button className="text-red-600 hover:text-red-900">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
