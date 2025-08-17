import { FormData, SlideProps } from "@/types/form.types";
import { FormButton, FormInput } from "../form/FormComponents";
import { NextButton } from "../form/button";

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
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Edge Strategy
                </h2>
                <p className="text-gray-600">
                    Final details to complete your setup
                </p>
            </div>

            <FormInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => onDataChange("email", e.target.value)}
                placeholder="Enter your email"
                error={errors.email}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-2">Summary</h3>
                <div className="text-sm text-blue-800 space-y-1">
                    <p>
                        <strong>Infrastructure:</strong>{" "}
                        {formData.infrastructure || "Not selected"}
                    </p>
                    <p>
                        <strong>Objective:</strong>{" "}
                        {formData.objective || "Not provided"}
                    </p>
                    <p>
                        <strong>Device Count:</strong>{" "}
                        {formData.deviceCount || "Not selected"}
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        {formData.email || "Not provided"}
                    </p>
                </div>
            </div>

            <div className="pt-6 flex gap-4">
                <NextButton
                    onClick={onNext}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    COMPLETE SETUP
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
