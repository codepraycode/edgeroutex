import { FormData, SlideProps } from "@/types/form.types";
import { NextButton } from "../form/button";
import { FormButton, FormTextarea } from "../form/FormComponents";

export const ObjectiveSlide: React.FC<SlideProps<FormData>> = ({
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
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Goals
                </h2>
                <p className="text-gray-600">
                    Tell us about your edge computing objectives
                </p>
            </div>

            <FormTextarea
                label="What's your primary objective with edge computing?"
                value={formData.objective}
                onChange={(e) => onDataChange("objective", e.target.value)}
                placeholder="Enter your objectives..."
                maxLength={150}
                required
                error={errors.objective}
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
