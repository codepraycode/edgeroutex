
import RoadmapGenerator from "@/components/recommendations/RoadmapGenerator";
import RecommendationCard from "@/components/recommendations/RecommendationCard";
import { getRecommendations } from "@/lib/recommendations/action";

export default async function RecommendationsPage() {

    const recommendations = await getRecommendations();

    const prioritySections = [
        { level: "high", label: "High Priority", color: "bg-red-500" },
        { level: "medium", label: "Medium Priority", color: "bg-yellow-500" },
        { level: "low", label: "Low Priority", color: "bg-green-500" },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-10">
            {/* Header */}
            <div className="flex flex-col justify-between items-start mb-20 gap-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-2">
                        Your Edge Computing Recommendations
                    </h1>
                    <p className="text-gray-600">
                        Tailored suggestions based on your transportation
                        scenario.
                    </p>
                </div>
                <RoadmapGenerator recommendations={recommendations} />
            </div>

            {/* Empty State */}
            {recommendations.length === 0 && (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300 mb-2">
                        No recommendations generated yet
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Complete the assessment to get personalized
                        recommendations.
                    </p>
                    <a
                        href="/dashboard"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        Start Assessment
                    </a>
                </div>
            )}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Priority Sections */}
                {prioritySections.map(({ level, label, color }) => {
                    const filtered = recommendations.filter(
                        (r) => r.priority === level
                    );
                    if (filtered.length === 0) return null;

                    return (
                        <div className="" key={level}>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mb-6 flex items-center">
                                <span
                                    className={`w-3 h-3 ${color} rounded-full mr-2`}
                                ></span>
                                {label} Recommendations
                            </h2>

                            {filtered.map((recommendation) => (
                                <RecommendationCard
                                    key={recommendation.id}
                                    recommendation={recommendation}
                                />
                            ))}
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
