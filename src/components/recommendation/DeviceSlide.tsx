import { FormData, SlideProps } from "@/types/form.types";
import { FormButton, FormCheckboxGroup, FormInput, FormRadioGroup, FormSelect, FormTextarea } from "../form/FormComponents";
import { NextButton } from "../form/button";
import { deviceOptions, infrastructureOptions } from "@/data";

export const ConstraintsSlide: React.FC<SlideProps<FormData>> = ({
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
                label="Budget Range for Implementation"
                name="budget"
                value={formData.budget}
                onChange={(e) => onDataChange("budget", e.target.value)}
                options={[
                    "Low (< 50,000 GBP)",
                    "Medium (50,000 – 200,000 GBP)",
                    "High (> 200,000 GBP)",
                ]}
                required
                error={errors.budget}
            />

            <FormCheckboxGroup
                label="Regulatory Requirements"
                name="regulatory"
                values={formData.regulatory}
                onChange={(values) => onDataChange("regulatory", values)}
                options={[
                    "GDPR (EU)",
                    "Local transport authority compliance",
                    "NIST/ISO security standards",
                ]}
                required
                error={errors.regulatory}
            />

            <FormInput
                label="Other Regulatory Requirement (optional)"
                type="text"
                value={formData.otherRegulatory}
                onChange={(e) =>
                    onDataChange("otherRegulatory", e.target.value)
                }
                placeholder="Enter other requirement..."
                error={errors.otherRegulatory}
            />

            <FormRadioGroup
                label="Data Handling"
                name="dataHandling"
                value={formData.dataHandling}
                onChange={(e) => onDataChange("dataHandling", e.target.value)}
                options={[
                    "Must remain local (edge storage only)",
                    "Cloud storage allowed",
                ]}
                required
                error={errors.dataHandling}
            />

            <FormRadioGroup
                label="Hardware Constraints"
                name="hardware"
                value={formData.hardware}
                onChange={(e) => onDataChange("hardware", e.target.value)}
                options={[
                    "Low-power devices only",
                    "Mixed (old & new hardware)",
                    "No restrictions",
                ]}
                required
                error={errors.hardware}
            />

            <FormRadioGroup
                label="Required Latency for Decision-Making"
                name="latency"
                value={formData.latency}
                onChange={(e) => onDataChange("latency", e.target.value)}
                options={[
                    "Real-time (< 1 second)",
                    "Near real-time (1–5 seconds)",
                    "Delayed (> 5 seconds acceptable)",
                ]}
                required
                error={errors.latency}
            />

            <FormCheckboxGroup
                label="Accessibility Needs"
                name="accessibility"
                values={formData.accessibility}
                onChange={(values) => onDataChange("accessibility", values)}
                options={[
                    "Multi-language support",
                    "Accessibility features (screen readers, simplified UI)",
                    "None",
                ]}
                required
                error={errors.accessibility}
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
