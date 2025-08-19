"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import {
    FormSelectProps,
    FormTextareaProps,
    FormRadioGroupProps,
    FormButtonProps,
    FormInputProps,
    SelectOption,
    RadioOption,
    ButtonVariant,
    ButtonSize,
    FormCheckboxGroupProps,
    CheckboxOption,
} from "@/types/form.types";

// 1. Select Dropdown Component
export const FormSelect: React.FC<FormSelectProps> = ({
    label,
    value,
    onChange,
    options = [],
    placeholder = "Select...",
    required = false,
    error = "",
    disabled = false,
    className = "",
    name,
    id,
}) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const normalizeOption = (option: string | SelectOption): SelectOption => {
        if (typeof option === "string") {
            return { label: option, value: option };
        }
        return option;
    };

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={selectId}
                    className="block text-sm font-medium text-gray-900 mb-3"
                >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                <select
                    id={selectId}
                    name={name}
                    className={`w-full p-3 border rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed ${
                        error ? "border-red-300" : "border-gray-300"
                    }`}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option, index) => {
                        const normalizedOption = normalizeOption(option);
                        return (
                            <option key={index} value={normalizedOption.value}>
                                {normalizedOption.label}
                            </option>
                        );
                    })}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

// 2. Textarea with Character Counter
export const FormTextarea: React.FC<FormTextareaProps> = ({
    label,
    value,
    onChange,
    placeholder = "Enter...",
    maxLength = 150,
    rows = 4,
    required = false,
    error = "",
    disabled = false,
    className = "",
    name,
    id,
    showCharacterCount = true,
}) => {
    const textareaId =
        id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={textareaId}
                    className="block text-sm font-medium text-gray-900 mb-3"
                >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                <textarea
                    id={textareaId}
                    name={name}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed ${
                        error ? "border-red-300" : "border-gray-300"
                    }`}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength}
                    required={required}
                    disabled={disabled}
                />
                {showCharacterCount && (
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {value.toString().length}/{maxLength}
                    </div>
                )}
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

// 3. Radio Button Group Component
export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false,
    error = "",
    disabled = false,
    className = "",
    layout = "vertical",
}) => {
    const normalizeOption = (option: string | RadioOption): RadioOption => {
        if (typeof option === "string") {
            return { label: option, value: option };
        }
        return option;
    };

    const layoutClasses =
        layout === "horizontal" ? "flex flex-wrap gap-6" : "space-y-3";

    return (
        <div className={className}>
            {label && (
                <fieldset>
                    <legend className="block text-sm font-medium text-gray-900 mb-4">
                        {label}{" "}
                        {required && <span className="text-red-500">*</span>}
                    </legend>
                    <div className={layoutClasses}>
                        {options.map((option, index) => {
                            const normalizedOption = normalizeOption(option);
                            const radioId = `${name}-${index}`;
                            const isDisabled =
                                disabled || normalizedOption.disabled;

                            return (
                                <label
                                    key={index}
                                    className="flex items-center"
                                >
                                    <input
                                        id={radioId}
                                        type="radio"
                                        name={name}
                                        value={normalizedOption.value}
                                        checked={
                                            value === normalizedOption.value
                                        }
                                        onChange={onChange}
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 disabled:cursor-not-allowed"
                                        required={required}
                                        disabled={isDisabled}
                                    />
                                    <span
                                        className={`ml-3 text-sm ${
                                            isDisabled
                                                ? "text-gray-400"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {normalizedOption.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>
            )}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

// 4. Form Button Component
export const FormButton: React.FC<FormButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    icon: Icon,
    iconPosition = "right",
    className = "",
    fullWidth = false,
}) => {
    const baseClasses =
        "font-medium transition-colors duration-200 flex items-center justify-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants: Record<ButtonVariant, string> = {
        primary:
            "bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-400 focus:ring-blue-500",
        secondary:
            "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 focus:ring-gray-500",
        outline:
            "border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500",
        danger: "bg-red-500 hover:bg-red-600 text-white disabled:bg-gray-400 focus:ring-red-500",
    };

    const sizes: Record<ButtonSize, string> = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3",
        lg: "px-10 py-4 text-lg",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        >
            {loading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
                <>
                    {Icon && iconPosition === "left" && (
                        <Icon className="w-4 h-4" />
                    )}
                    {children}
                    {Icon && iconPosition === "right" && (
                        <Icon className="w-4 h-4" />
                    )}
                </>
            )}
        </button>
    );
};

// 5. Form Input Component
export const FormInput: React.FC<FormInputProps> = ({
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    error = "",
    disabled = false,
    className = "",
    name,
    id,
    min,
    max,
    step,
}) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-gray-900 mb-3"
                >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                id={inputId}
                name={name}
                type={type}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    error ? "border-red-300" : "border-gray-300"
                }`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                min={min}
                max={max}
                step={step}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};


export const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({
    label,
    name,
    values = [],
    onChange,
    options = [],
    required = false,
    error = "",
    disabled = false,
    className = "",
    layout = "vertical",
}) => {
    const normalizeOption = (
        option: string | CheckboxOption
    ): CheckboxOption => {
        if (typeof option === "string") {
            return { label: option, value: option };
        }
        return option;
    };

    const layoutClasses =
        layout === "horizontal" ? "flex flex-wrap gap-6" : "space-y-3";

    const handleCheckboxChange = (checkedValue: string) => {
        let newValues = [...values];
        if (newValues.includes(checkedValue)) {
            newValues = newValues.filter((v) => v !== checkedValue);
        } else {
            newValues.push(checkedValue);
        }
        onChange(newValues);
    };

    return (
        <div className={className}>
            {label && (
                <fieldset>
                    <legend className="block text-sm font-medium text-gray-900 mb-4">
                        {label}{" "}
                        {required && <span className="text-red-500">*</span>}
                    </legend>
                    <div className={layoutClasses}>
                        {options.map((option, index) => {
                            const normalizedOption = normalizeOption(option);
                            const checkboxId = `${name}-${index}`;
                            const isDisabled =
                                disabled || normalizedOption.disabled;

                            return (
                                <label
                                    key={index}
                                    htmlFor={checkboxId}
                                    className="flex items-center"
                                >
                                    <input
                                        id={checkboxId}
                                        type="checkbox"
                                        name={name}
                                        value={normalizedOption.value}
                                        checked={values.includes(
                                            normalizedOption.value
                                        )}
                                        onChange={() =>
                                            handleCheckboxChange(
                                                normalizedOption.value
                                            )
                                        }
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:cursor-not-allowed"
                                        required={
                                            required && values.length === 0
                                        }
                                        disabled={isDisabled}
                                    />
                                    <span
                                        className={`ml-3 text-sm ${
                                            isDisabled
                                                ? "text-gray-400"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {normalizedOption.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>
            )}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};
