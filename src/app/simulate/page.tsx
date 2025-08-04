"use client";

import { useState } from "react";

export default function SimulatePage() {
    const [fleetSize, setFleetSize] = useState(10);
    const [useCase, setUseCase] = useState("crash_detection");
    const [concerns, setConcerns] = useState<string[]>([]);

    const concernOptions = [
        "Low latency",
        "Unstable connectivity",
        "Limited power",
        "Data privacy",
    ];

    const toggleConcern = (value: string) => {
        setConcerns((prev) =>
            prev.includes(value)
                ? prev.filter((c) => c !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = () => {
        console.log({ fleetSize, useCase, concerns });
        // TODO: Route to result page or call recommendation logic
    };

    return (
        <main className="min-h-screen p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Simulation Setup</h2>

            <label className="block mb-4">
                <span className="font-medium">Fleet Size</span>
                <input
                    type="number"
                    className="w-full mt-1 px-4 py-2 border rounded"
                    value={fleetSize}
                    onChange={(e) => setFleetSize(Number(e.target.value))}
                />
            </label>

            <label className="block mb-4">
                <span className="font-medium">Use Case</span>
                <select
                    className="w-full mt-1 px-4 py-2 border rounded"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                >
                    <option value="crash_detection">Crash Detection</option>
                    <option value="route_optimization">
                        Route Optimization
                    </option>
                    <option value="predictive_maintenance">
                        Predictive Maintenance
                    </option>
                </select>
            </label>

            <div className="mb-6">
                <span className="font-medium block mb-2">Edge Concerns</span>
                <div className="grid gap-2">
                    {concernOptions.map((opt) => (
                        <label key={opt} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={concerns.includes(opt)}
                                onChange={() => toggleConcern(opt)}
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
                Generate Advice
            </button>
        </main>
    );
}
