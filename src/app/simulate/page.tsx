"use client";

import { useEffect, useState } from "react";
import { generateRecommendations } from "@/lib/recommendation";
import { z } from "zod";

const inputSchema = z.object({
    fleetSize: z.number().min(1, "Fleet size must be at least 1."),
    useCase: z.string().min(1, "Please select a use case."),
    concerns: z.array(z.string()),
});

export default function SimulatePage() {
    const [fleetSize, setFleetSize] = useState(10);
    const [useCase, setUseCase] = useState("crash_detection");
    const [concerns, setConcerns] = useState<string[]>([]);
    const [results, setResults] = useState<string[]>([]);
    const [error, setError] = useState<string>("");

    const concernOptions = [
        "Low latency",
        "Unstable connectivity",
        "Limited power",
        "Data privacy",
    ];

    useEffect(() => {
        const saved = localStorage.getItem("edge-sim-state");
        if (saved) {
            const parsed = JSON.parse(saved);
            setFleetSize(parsed.fleetSize || 10);
            setUseCase(parsed.useCase || "crash_detection");
            setConcerns(parsed.concerns || []);
            setResults(parsed.results || []);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "edge-sim-state",
            JSON.stringify({ fleetSize, useCase, concerns, results })
        );
    }, [fleetSize, useCase, concerns, results]);

    const toggleConcern = (value: string) => {
        setConcerns((prev) =>
            prev.includes(value)
                ? prev.filter((c) => c !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = () => {
        setError("");
        const parsed = inputSchema.safeParse({ fleetSize, useCase, concerns });
        if (!parsed.success) {
            setError(parsed.error.message);
            return;
        }
        const advice = generateRecommendations(parsed.data);
        setResults(advice);
    };

    return (
        <main className="min-h-screen p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Simulation Setup</h2>

            {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

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

            {results.length > 0 && (
                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">
                        Recommendations
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        {results.map((r, i) => (
                            <li key={i}>{r}</li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}
