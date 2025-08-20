import { FormData, SlideProps } from "@/types/form.types";

import { RecommendationTable } from "./RecommendationTable";
import { RecommendationRoadmap } from "./Roadmap";
import { getStrategyOutputs } from "@/lib/strategyMatcher";
import { DownloadMenu } from "../form/button";

export const StrategySlide: React.FC<SlideProps<FormData>> = ({
    formData,
    errors,
    onDataChange,
    onNext,
    onBack,
    isLoading,
    isFirstStep,
    isLastStep,
}) => {
     const { recommendations, roadmap } = getStrategyOutputs(formData);
    return (
        <div className="space-y-8 max-w-7xl">
            {recommendations.length > 0 ? (
                <>
                    <RecommendationTable data={recommendations} />
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
            </div>
        </div>
    );
};
