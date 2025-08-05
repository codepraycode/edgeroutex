// src/components/recommendations/RecommendationCard.tsx
import { Recommendation } from "@/lib/recommendations/types";

export default function RecommendationCard({
    recommendation,
}: {
    recommendation: Recommendation;
}) {
    return (
        <div
            className={`border-l-4 ${
                recommendation.priority === "high"
                    ? "border-red-500"
                    : recommendation.priority === "medium"
                    ? "border-yellow-500"
                    : "border-green-500"
            } bg-white rounded-md shadow p-6 h-full`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                    {recommendation.title}
                </h3>
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                        recommendation.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : recommendation.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                    }`}
                >
                    {recommendation.priority}
                </span>
            </div>

            <p className="text-gray-600 mb-4">{recommendation.description}</p>

            <div className="space-y-3">
                <div>
                    <h4 className="text-sm font-medium text-gray-500">
                        Estimated Impact
                    </h4>
                    <p className="text-sm text-gray-700">
                        {recommendation.estimatedImpact}
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-gray-500">
                        Implementation Steps
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                        {recommendation.implementationSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
