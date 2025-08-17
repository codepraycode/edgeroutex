import React from "react";
import { FormSelect } from "@/components/form/FormComponents";
import { NextButton } from "@/components/form/button";
import { FormButton } from "@/components/form/FormComponents";
import { SelectOption, SlideProps } from "@/types/form.types";

interface FormData {
    infrastructure: string;
    objective: string;
    deviceCount: string;
    email: string;
}

export const InfrastructureSlide: React.FC<SlideProps<FormData>> = ({
    formData,
    errors,
    onDataChange,
    onNext,
    onBack,
    isLoading,
    isFirstStep,
    isLastStep,
}) => {
    const infrastructureOptions: SelectOption[] = [
        { label: "Cloud only", value: "cloud" },
        { label: "On-premises only", value: "onprem" },
        { label: "Hybrid cloud", value: "hybrid" },
        { label: "Multi-cloud", value: "multicloud" },
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Current Setup
                </h2>
                <p className="text-gray-600">
                    Let's understand your current infrastructure
                </p>
            </div>

            <FormSelect
                label="What is your current infrastructure setup?"
                value={formData.infrastructure}
                onChange={(e) => onDataChange("infrastructure", e.target.value)}
                options={infrastructureOptions}
                placeholder="Select infrastructure type"
                required
                error={errors.infrastructure}
            />

            <div className="pt-6 flex gap-4">
                <NextButton
                    onClick={onNext}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    {isLastStep ? "COMPLETE" : "NEXT"}
                </NextButton>

                {!isFirstStep && (
                    <FormButton
                        variant="secondary"
                        onClick={onBack}
                        disabled={isLoading}
                    >
                        BACK
                    </FormButton>
                )}
            </div>
        </div>
    );
};
