import { RecommendationFormData, SlideProps } from "@/types/form.types";
import { RecommendationTable } from "./RecommendationTable";
import { RecommendationRoadmap } from "./Roadmap";
import { getStrategyOutputs } from "@/lib/strategyMatcher";
import { DownloadMenu } from "../form/button";

export const StrategySlide: React.FC<SlideProps<RecommendationFormData>> = ({
    formData,
    onNext,
    onBack,
    isLoading,
    isFirstStep,
    isLastStep,
}) => {
    console.debug({formData})
    const { recommendations, roadmap } = getStrategyOutputs(formData);

    return (
        <div className="space-y-8 max-w-7xl">
            {recommendations.length > 0 ? (
                <>
                    {/* Recommendations Table */}
                    <RecommendationTable data={recommendations} />

                    {/* Roadmap timeline */}
                    <div className="max-w-3xl">
                        <RecommendationRoadmap phases={roadmap} />
                    </div>
                </>
            ) : (
                <p className="text-gray-600">
                    No matching strategy found. Please review your inputs.
                </p>
            )}

            <div className="pt-6 flex gap-4">
                <DownloadMenu
                    phases={roadmap}
                    recommendations={recommendations}
                />

                {!isFirstStep && (
                    <button
                        onClick={onBack}
                        disabled={isLoading}
                        className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                        BACK
                    </button>
                )}
            </div>
        </div>
    );
};
