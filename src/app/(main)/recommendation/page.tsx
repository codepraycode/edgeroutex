"use client";
import React from "react";
import {
    CurrentSetupSlide,
    ObjectiveSlide,
    ConstraintsSlide,
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
    const currentSetupValidation: ValidationRule[] = [
        {
            field: "transportMode",
            required: true,
            message: "Please select at least one transport mode",
        },
        {
            field: "infrastructure",
            required: true,
            message: "Please select your IT infrastructure",
        },
        {
            field: "connectivity",
            required: true,
            message: "Please select connectivity availability",
        },
        {
            field: "devices",
            required: true,
            message: "Please select at least one existing device type",
        },
        {
            field: "assetCount",
            required: true,
            message: "Please select the number of assets to manage",
        },
    ];


    const goalsValidation: ValidationRule[] = [
        {
            field: "primaryObjectives",
            required: true,
            message: "Please select at least one primary objective",
        },
        {
            field: "analyticsAutomation",
            required: true,
            message: "Please select at least one analytics/automation need",
        },
    ];


    const constraintsValidation: ValidationRule[] = [
        {
            field: "budget",
            required: true,
            message: "Please select a budget range",
        },
        {
            field: "regulatory",
            required: true,
            message: "Please select at least one regulatory requirement",
        },
        {
            field: "dataHandling",
            required: true,
            message: "Please select a data handling option",
        },
        {
            field: "hardware",
            required: true,
            message: "Please select a hardware constraint",
        },
        {
            field: "latency",
            required: true,
            message: "Please select a latency requirement",
        },
        {
            field: "accessibility",
            required: true,
            message: "Please select at least one accessibility option",
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
            component: CurrentSetupSlide,
            validationRules: currentSetupValidation,
        },
        {
            id: 2,
            title: "Your goals",
            component: ObjectiveSlide,
            validationRules: goalsValidation,
        },
        {
            id: 3,
            title: "Key constraints",
            component: ConstraintsSlide,
            validationRules: constraintsValidation,
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
                className="mb-20"
            />
        </div>
    );
};

export default RecommendationPage;
