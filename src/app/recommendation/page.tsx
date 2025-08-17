"use client";
import React from "react";
import {
    InfrastructureSlide,
    ObjectiveSlide,
    DeviceSlide,
    StrategySlide,
    SlideContainer,
} from "@/components/recommendation";
import { SlideConfig, ValidationRule } from "@/types/form.types";

interface FormData {
    infrastructure: string;
    objective: string;
    deviceCount: string;
    email: string;
}

const RecommendationPage: React.FC = () => {
    const initialFormData: FormData = {
        infrastructure: "",
        objective: "",
        deviceCount: "",
        email: "",
    };

    // Validation rules for each slide
    const infrastructureValidation: ValidationRule[] = [
        {
            field: "infrastructure",
            required: true,
            message: "Please select an infrastructure type",
        },
    ];

    const objectiveValidation: ValidationRule[] = [
        {
            field: "objective",
            required: true,
            message: "Please describe your objective",
        },
        {
            field: "objective",
            minLength: 10,
            message: "Please provide more details (at least 10 characters)",
        },
    ];

    const deviceValidation: ValidationRule[] = [
        {
            field: "deviceCount",
            required: true,
            message: "Please select a device count range",
        },
    ];

    const strategyValidation: ValidationRule[] = [
        {
            field: "email",
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
        },
    ];

    // Slide configuration
    const slides: SlideConfig[] = [
        {
            id: 1,
            title: "Current setup",
            component: InfrastructureSlide,
            validationRules: infrastructureValidation,
        },
        {
            id: 2,
            title: "Your goals",
            component: ObjectiveSlide,
            validationRules: objectiveValidation,
        },
        {
            id: 3,
            title: "Key constraints",
            component: DeviceSlide,
            validationRules: deviceValidation,
        },
        {
            id: 4,
            title: "Edge strategy",
            component: StrategySlide,
            validationRules: strategyValidation,
        },
    ];

    const handleComplete = async (data: FormData) => {
        console.log("Form completed with data:", data);
        // Handle form completion (API call, navigation, etc.)

        // Example: Navigate to results page or show success message
        // router.push('/results');
    };

    return (
        <div className="p-6 pt-10">
            <SlideContainer
                slides={slides}
                initialData={initialFormData}
                onComplete={handleComplete}
                className="min-h-screen"
            />
        </div>
    );
};

export default RecommendationPage;
