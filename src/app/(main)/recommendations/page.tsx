// src/app/(main)/recommendations/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import RoadmapGenerator from "@/components/recommendations/RoadmapGenerator";
import RecommendationCard from "@/components/recommendations/RecommendationCard";
import { getRecommendations } from "@/lib/recommendations/action";

export default async function RecommendationsPage() {
    const session = await auth();

    // Redirect unauthenticated users
    if (!session) {
        redirect("/login");
    }

    // Get recommendations (replace with your actual data fetching)
    const recommendations = await getRecommendations(session.user.id);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Your Edge Computing Recommendations
                    </h1>
                    <p className="text-gray-600">
                        Tailored suggestions based on your transportation
                        scenario
                    </p>
                </div>
                <RoadmapGenerator recommendations={recommendations} />
            </div>

            {/* Priority Sections */}
            <div className="space-y-12">
                {/* High Priority */}
                {recommendations.some((r) => r.priority === "high") && (
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            High Priority Recommendations
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recommendations
                                .filter((r) => r.priority === "high")
                                .map((recommendation) => (
                                    <RecommendationCard
                                        key={recommendation.id}
                                        recommendation={recommendation}
                                    />
                                ))}
                        </div>
                    </section>
                )}

                {/* Medium Priority */}
                {recommendations.some((r) => r.priority === "medium") && (
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            Medium Priority Recommendations
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recommendations
                                .filter((r) => r.priority === "medium")
                                .map((recommendation) => (
                                    <RecommendationCard
                                        key={recommendation.id}
                                        recommendation={recommendation}
                                    />
                                ))}
                        </div>
                    </section>
                )}

                {/* Low Priority */}
                {recommendations.some((r) => r.priority === "low") && (
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            Low Priority Recommendations
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recommendations
                                .filter((r) => r.priority === "low")
                                .map((recommendation) => (
                                    <RecommendationCard
                                        key={recommendation.id}
                                        recommendation={recommendation}
                                    />
                                ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Empty State */}
            {recommendations.length === 0 && (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No recommendations generated yet
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Complete the assessment to get personalized
                        recommendations
                    </p>
                    <a
                        href="/dashboard"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        Start Assessment
                    </a>
                </div>
            )}
        </div>
    );
}
