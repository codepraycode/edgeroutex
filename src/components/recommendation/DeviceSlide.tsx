import { FormData, SlideProps } from "@/types/form.types";
import { FormButton, FormRadioGroup } from "../form/FormComponents";
import { NextButton } from "../form/button";

export const DeviceSlide: React.FC<SlideProps<FormData>> = ({
    formData,
    errors,
    onDataChange,
    onNext,
    onBack,
    isLoading,
    isFirstStep,
    isLastStep,
}) => {
    const deviceOptions = [
        { label: "<10", value: "<10" },
        { label: "<20", value: "<20" },
        { label: "25-50", value: "25-50" },
        { label: ">50", value: ">50" },
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Key Constraints
                </h2>
                <p className="text-gray-600">
                    Help us understand your scale requirements
                </p>
            </div>

            <FormRadioGroup
                label="How many devices or sensors will connect to the system?"
                name="deviceCount"
                value={formData.deviceCount}
                onChange={(e) => onDataChange("deviceCount", e.target.value)}
                options={deviceOptions}
                required
                error={errors.deviceCount}
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
