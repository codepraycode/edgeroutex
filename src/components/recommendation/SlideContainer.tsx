import React, { useState, useEffect } from "react";
import { FormStepIndicator } from "@/components/form/FormStepIndicator";
import { SlideConfig, SlideProps, Step } from "@/types/form.types";

interface SlideContainerProps<T> {
    slides: SlideConfig[];
    initialData: T;
    onComplete: (data: T) => void;
    className?: string;
}

export const SlideContainer = <T extends Record<string, any>>({
    slides,
    initialData,
    onComplete,
    className = "",
}: SlideContainerProps<T>) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState<T>(initialData);
    const [errors, setErrors] = useState<Partial<T>>({});
    const [loading, setLoading] = useState(false);

    // Convert slides to steps for the indicator
    const steps: Step[] = slides.map((slide) => ({
        id: slide.id,
        title: slide.title,
    }));

    const validateSlide = (slideIndex: number): boolean => {
        const slide = slides[slideIndex];
        if (!slide.validationRules) return true;

        const newErrors: Partial<T> = {};

        slide.validationRules.forEach((rule) => {
            const value = formData[rule.field as keyof T];

            if (
                rule.required &&
                (!value || (typeof value === "string" && !value.trim()))
            ) {
                newErrors[rule.field as keyof T] = (rule.message ||
                    `${rule.field} is required`) as T[keyof T];
                return;
            }

            if (
                rule.minLength &&
                typeof value === "string" &&
                value.length < rule.minLength
            ) {
                newErrors[rule.field as keyof T] = (rule.message ||
                    `${rule.field} must be at least ${rule.minLength} characters`) as T[keyof T];
                return;
            }

            if (
                rule.maxLength &&
                typeof value === "string" &&
                value.length > rule.maxLength
            ) {
                newErrors[rule.field as keyof T] = (rule.message ||
                    `${rule.field} must be at most ${rule.maxLength} characters`) as T[keyof T];
                return;
            }

            if (
                rule.pattern &&
                typeof value === "string" &&
                !rule.pattern.test(value)
            ) {
                newErrors[rule.field as keyof T] = (rule.message ||
                    `${rule.field} format is invalid`) as T[keyof T];
                return;
            }

            if (rule.custom) {
                const customError = rule.custom(value, formData);
                if (customError) {
                    newErrors[rule.field as keyof T] =
                        customError as T[keyof T];
                }
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleDataChange = <K extends keyof T>(
        field: K,
        value: T[K]
    ): void => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleNext = async (): Promise<void> => {
        if (!validateSlide(currentSlide)) return;

        setLoading(true);
        try {
            // Simulate async operation (API call, etc.)
            await new Promise((resolve) => setTimeout(resolve, 500));

            if (currentSlide === slides.length - 1) {
                onComplete(formData);
            } else {
                setCurrentSlide((prev) => prev + 1);
            }
        } catch (error) {
            console.error("Error proceeding to next slide:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = (): void => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    const handleStepClick = (stepId: number | string): void => {
        const targetIndex = slides.findIndex((slide) => slide.id === stepId);
        if (targetIndex !== -1 && targetIndex <= currentSlide) {
            setCurrentSlide(targetIndex);
        }
    };

    const CurrentSlideComponent = slides[currentSlide]?.component;

    if (!CurrentSlideComponent) {
        return <div>Slide not found</div>;
    }

    const slideProps: SlideProps<T> = {
        formData,
        errors,
        onDataChange: handleDataChange,
        onNext: handleNext,
        onBack: handleBack,
        isLoading: loading,
        isLastStep: currentSlide === slides.length - 1,
        isFirstStep: currentSlide === 0,
    };

    return (
        <div className={`space-y-10 ${className}`}>
            <FormStepIndicator
                steps={steps}
                currentStep={slides[currentSlide].id}
                onStepClick={handleStepClick}
                variant="numbered"
            />

            
            <CurrentSlideComponent {...slideProps} />
        </div>
    );
};
