import { SlideProps } from "@/types/form.types";
import { NextButton } from "../form/button";
import { FormButton, FormCheckboxGroup } from "../form/FormComponents";


interface FormData {
    // step 2
    primaryObjectives: string[];
    analyticsAutomation: string[];
}


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
        <div className="space-y-8 max-w-4xl">
            <FormCheckboxGroup
                label="Primary Objectives for Edge Computing"
                name="primaryObjectives"
                values={formData.primaryObjectives}
                onChange={(values) => onDataChange("primaryObjectives", values)}
                options={[
                    "Improve traffic flow and congestion management",
                    "Enhance passenger/road user safety",
                    "Enable predictive maintenance for vehicles/assets",
                    "Reduce operational costs",
                    "Improve sustainability / energy efficiency",
                ]}
                required
                error={errors.primaryObjectives?.join(", ")}
            />

            <FormCheckboxGroup
                label="Desired Analytics & Automation"
                name="analyticsAutomation"
                values={formData.analyticsAutomation}
                onChange={(values) =>
                    onDataChange("analyticsAutomation", values)
                }
                options={[
                    "Real-time dashboards and alerts",
                    "AI/ML predictions (e.g., demand forecasting, accident detection)",
                    "Automated control (traffic lights, fleet routing)",
                    "Integration with enterprise systems (ERP, SCADA, TMS)",
                ]}
                required
                error={errors.analyticsAutomation?.join(", ")}
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
