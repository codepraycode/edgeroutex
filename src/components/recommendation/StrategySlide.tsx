import { FormData, SlideProps } from "@/types/form.types";
import { FormButton, FormRadioGroup, FormSelect, FormTextarea } from "../form/FormComponents";
import { DownloadButton, NextButton } from "../form/button";
import { deviceOptions, infrastructureOptions, roadmapPhases, sampleData } from "@/data";
import { RecommendationTable } from "./RecommendationTable";
import { RecommendationRoadmap } from "./Roadmap";

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
    return (
        <div className="space-y-8 max-w-7xl">
            <RecommendationTable data={sampleData} />

            <div className="max-w-3xl">
                <RecommendationRoadmap phases={roadmapPhases} />
            </div>

            <div className="space-y-2 pt-10">
                <h3 className="text-2xl font-semibold">Pro tips</h3>
                <p>
                    Ensure robust security measures, regularly update software,
                    monitor performance metric
                </p>
            </div>

            <div className="pt-6 flex gap-4">
                <DownloadButton children={"Download Roadmap"}/>
            </div>
        </div>
    );
};
