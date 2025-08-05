import { CaseStudy } from "@/lib/case-studies/data";
import Link from "next/link";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-3">
                    <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            caseStudy.environment === "urban"
                                ? "bg-blue-100 text-blue-800"
                                : caseStudy.environment === "rural"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                        }`}
                    >
                        {caseStudy.environment.charAt(0).toUpperCase() +
                            caseStudy.environment.slice(1)}
                    </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {caseStudy.description}
                </p>

                <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Vehicle Types
                    </h4>
                    <div className="flex flex-wrap gap-1">
                        {caseStudy.vehicleType.map((type) => (
                            <span
                                key={type}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>

                {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Key Outcomes
                        </h4>
                        <ul className="space-y-1">
                            {caseStudy.outcomes
                                .slice(0, 3)
                                .map((outcome, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <svg
                                            className="h-4 w-4 text-green-500 mt-0.5 mr-1.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            {outcome}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}

                <Link
                    href={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    View details
                    <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
