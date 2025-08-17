import { Step, StepIndicatorProps } from "@/types/form.types";
import { Check } from "lucide-react";
import { Fragment } from "react";

export const FormStepIndicator: React.FC<StepIndicatorProps> = ({
    steps,
    currentStep,
    onStepClick,
    className = "",
    variant = "default",
    orientation = "horizontal",
    showConnector = true,
}) => {
    const isStepActive = (step: Step): boolean => {
        return step.id === currentStep || step.active === true;
    };

    const isStepCompleted = (step: Step): boolean => {
        if (step.completed !== undefined) return step.completed;

        // Auto-determine completion based on current step
        const currentIndex = steps.findIndex((s) => s.id === currentStep);
        const stepIndex = steps.findIndex((s) => s.id === step.id);
        return currentIndex > stepIndex;
    };

    const isStepDisabled = (step: Step): boolean => {
        return step.disabled === true;
    };

    const handleStepClick = (step: Step): void => {
        if (!isStepDisabled(step) && onStepClick) {
            onStepClick(step.id);
        }
    };

    const getStepClasses = (step: Step): string => {
        const base =
            "flex items-center justify-center rounded-full border-2 text-sm font-medium transition-all duration-200";
        const size = variant === "minimal" ? "w-6 h-6" : "w-8 h-8";
        const cursor =
            onStepClick && !isStepDisabled(step)
                ? "cursor-pointer hover:scale-105"
                : "";

        if (isStepCompleted(step)) {
            return `${base} ${size} ${cursor} bg-green-500 border-green-500 text-white`;
        } else if (isStepActive(step)) {
            return `${base} ${size} ${cursor} bg-blue-500 border-blue-500 text-white`;
        } else if (isStepDisabled(step)) {
            return `${base} ${size} bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed`;
        } else {
            return `${base} ${size} ${cursor} bg-white border-gray-300 text-gray-500 hover:border-blue-300`;
        }
    };

    const getTitleClasses = (step: Step): string => {
        const base = "text-sm transition-colors duration-200 hidden lg:block";

        if (isStepActive(step)) {
            return `${base} text-blue-600 font-medium`;
        } else if (isStepCompleted(step)) {
            return `${base} text-green-600 font-medium`;
        } else if (isStepDisabled(step)) {
            return `${base} text-gray-400`;
        } else {
            return `${base} text-gray-500`;
        }
    };

    const containerClasses =
        orientation === "horizontal"
            ? "flex items-center justify-between"
            : "flex flex-col space-y-4";

    const stepContainerClasses =
        orientation === "horizontal"
            ? "flex flex-col items-center justify-center"
            : "flex items-start space-x-3";

    const connectorClasses =
        orientation === "horizontal"
            ? "flex-1 h-px bg-gray-300 mx-4"
            : "w-px h-8 bg-gray-300 ml-3";

    return (
        <div className={`${containerClasses} ${className}`}>
            {steps.map((step, index) => (
                <Fragment key={step.id}>
                    <div className={stepContainerClasses}>
                        <div
                            className={getStepClasses(step)}
                            onClick={() => handleStepClick(step)}
                            role={onStepClick ? "button" : undefined}
                            tabIndex={
                                onStepClick && !isStepDisabled(step)
                                    ? 0
                                    : undefined
                            }
                            onKeyDown={(e) => {
                                if (
                                    (e.key === "Enter" || e.key === " ") &&
                                    onStepClick &&
                                    !isStepDisabled(step)
                                ) {
                                    e.preventDefault();
                                    handleStepClick(step);
                                }
                            }}
                        >
                            {isStepCompleted(step) && variant !== "minimal" ? (
                                <Check className="w-4 h-4" />
                            ) : variant === "numbered" ? (
                                index + 1
                            ) : (
                                step.id
                            )}
                        </div>
                        <div
                            className={
                                orientation === "horizontal" ? "mt-2" : "ml-0"
                            }
                        >
                            <span className={getTitleClasses(step)}>
                                {step.title}
                            </span>
                        </div>
                    </div>
                    {showConnector && index < steps.length - 1 && (
                        <div className={connectorClasses}></div>
                    )}
                </Fragment>
            ))}
        </div>
    );
};
