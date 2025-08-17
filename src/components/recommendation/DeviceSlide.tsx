import { FormData, SlideProps } from "@/types/form.types";
import { FormButton, FormRadioGroup, FormSelect, FormTextarea } from "../form/FormComponents";
import { NextButton } from "../form/button";
import { deviceOptions, infrastructureOptions } from "@/data";

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
    

    return (
        <div className="space-y-8 max-w-4xl">
            <FormSelect
                label="What is your current infrastructure setup?"
                value={formData.infrastructure}
                onChange={(e) => onDataChange("infrastructure", e.target.value)}
                options={infrastructureOptions}
                placeholder="Select infrastructure type"
                required
                error={errors.infrastructure}
            />

            <FormTextarea
                label="What's your primary objective with edge computing?"
                value={formData.objective}
                onChange={(e) => onDataChange("objective", e.target.value)}
                placeholder="Enter your objectives..."
                maxLength={150}
                required
                error={errors.objective}
            />

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
