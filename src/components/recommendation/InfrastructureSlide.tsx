import React from "react";
import { FormRadioGroup, FormSelect } from "@/components/form/FormComponents";
import { NextButton } from "@/components/form/button";
import { FormButton } from "@/components/form/FormComponents";
import { SlideProps } from "@/types/form.types";
import { RecommendationFormData } from "@/types/form.types"; // import global type

export const CurrentSetupSlide: React.FC<
    SlideProps<RecommendationFormData>
> = ({
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
        <div className="space-y-8 max-w-4xl">
            <FormRadioGroup
                label="Transport Mode"
                name="transportMode"
                value={formData.transportMode?.join(", ")}
                onChange={(e) =>
                    onDataChange("transportMode", [e.target.value])
                }
                options={[
                    "Buses",
                    "Rail/Metro",
                    "Traffic Management (signals, intersections)",
                    "Freight & Logistics",
                    "Mixed",
                ]}
                required
                error={errors.transportMode?.join(", ")}
            />

            <FormSelect
                label="Current IT Infrastructure"
                value={formData.infrastructure}
                onChange={(e) => onDataChange("infrastructure", e.target.value)}
                options={[
                    "On-premise servers",
                    "Cloud-based systems",
                    "Hybrid (mix of edge & cloud)",
                    "Minimal / None",
                ]}
                placeholder="Select infrastructure type"
                required
                error={errors.infrastructure}
            />

            <FormSelect
                label="Connectivity Availability"
                value={formData.connectivity}
                onChange={(e) => onDataChange("connectivity", e.target.value)}
                options={[
                    "High-speed (urban fibre/5G)",
                    "Moderate (standard 4G/wired broadband)",
                    "Low (rural / intermittent connectivity)",
                ]}
                placeholder="Select connectivity level"
                required
                error={errors.connectivity}
            />

            <FormRadioGroup
                label="Existing Edge/IoT Devices"
                name="devices"
                value={formData.devices?.join(", ")}
                onChange={(e) => onDataChange("devices", [e.target.value])}
                options={[
                    "Cameras / Dashcams",
                    "Telematics / GPS trackers",
                    "Sensors (traffic, environmental, safety)",
                    "None",
                ]}
                required
                error={errors.devices?.join(", ")}
            />

            <FormRadioGroup
                label="Number of Assets to Manage"
                name="assetCount"
                value={formData.assetCount}
                onChange={(e) => onDataChange("assetCount", e.target.value)}
                options={["< 100", "100 – 1,000", "> 1,000"]}
                required
                error={errors.assetCount}
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
