"use client";
import React from "react";

interface SliderProps {
    min: number;
    max: number;
    value: number;
    step?: number;
    onChange: (val: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
    min,
    max,
    value,
    step = 1,
    onChange,
}) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="w-full">
            <div className="relative w-full h-2 bg-neutral-200 rounded-full">
                {/* Filled Track */}
                <div
                    className="absolute h-2 bg-primary-blue rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
                {/* Range Input */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className={`
                        absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer
                        appearance-none
                    `}
                />
                {/* Custom Thumb */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary-blue rounded-full shadow-md transition-transform transform hover:scale-110"
                    style={{ left: `calc(${percentage}% - 10px)` }}
                />
            </div>

            {/* Min/Max labels */}
            <div className="flex justify-between text-xs text-neutral-600 mt-2">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};
