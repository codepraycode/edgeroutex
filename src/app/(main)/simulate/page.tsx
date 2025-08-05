/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import SimulationChart from "@/components/simulations/SimulationChart";
import { useState } from "react";

const simulationScenarios = [
    {
        id: "latency-comparison",
        title: "Latency Comparison: Cloud vs Edge",
        description:
            "Visualize the difference in response times between cloud and edge architectures.",
        parameters: ["fleetSize", "dataRate"],
    },
    {
        id: "cost-analysis",
        title: "Cost Analysis Over 5 Years",
        description:
            "Compare total cost of ownership for different deployment strategies.",
        parameters: ["fleetSize", "dataRetention"],
    },
];

export default function SimulatePage() {
    const [activeScenario, setActiveScenario] = useState<string | null>(null);
    const [results, setResults] = useState<any>(null);

    const runSimulation = (scenarioId: string) => {
        // In a real app, this would call an API or perform calculations
        setActiveScenario(scenarioId);

        // Mock results
        setTimeout(() => {
            if (scenarioId === "latency-comparison") {
                setResults({
                    metrics: [
                        {
                            name: "Cloud Architecture",
                            value: "420ms",
                            improvement: "0%",
                        },
                        {
                            name: "Edge Architecture",
                            value: "28ms",
                            improvement: "93%",
                        },
                    ],
                    chartData: {
                        labels: ["Cloud", "Edge"],
                        datasets: [
                            {
                                label: "Average Latency (ms)",
                                data: [420, 28],
                                backgroundColor: ["#FF6384", "#36A2EB"],
                            },
                        ],
                    },
                });
            } else {
                setResults({
                    metrics: [
                        {
                            name: "Cloud-Only",
                            value: "$1.2M",
                            improvement: "0%",
                        },
                        { name: "Hybrid", value: "$850K", improvement: "29%" },
                        {
                            name: "Edge-First",
                            value: "$620K",
                            improvement: "48%",
                        },
                    ],
                    chartData: {
                        labels: ["Cloud-Only", "Hybrid", "Edge-First"],
                        datasets: [
                            {
                                label: "5-Year Cost",
                                data: [1200000, 850000, 620000],
                                backgroundColor: [
                                    "#FF6384",
                                    "#FFCE56",
                                    "#36A2EB",
                                ],
                            },
                        ],
                    },
                });
            }
        }, 1000);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Edge Computing Simulations
            </h1>
            <p className="text-gray-600 mb-8">
                Explore different edge computing scenarios and their potential
                impacts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {simulationScenarios.map((scenario) => (
                    <div
                        key={scenario.id}
                        className="border rounded-lg p-4 hover:shadow-md transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            {scenario.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {scenario.description}
                        </p>
                        <button
                            onClick={() => runSimulation(scenario.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                        >
                            Run Simulation
                        </button>
                    </div>
                ))}
            </div>

            {activeScenario && (
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">
                        {
                            simulationScenarios.find(
                                (s) => s.id === activeScenario
                            )?.title
                        }
                    </h2>

                    {results ? (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {results.metrics.map((metric: any) => (
                                    <div
                                        key={metric.name}
                                        className="bg-white p-4 rounded shadow"
                                    >
                                        <h4 className="font-medium text-gray-700">
                                            {metric.name}
                                        </h4>
                                        <p className="text-2xl font-bold mt-1">
                                            {metric.value}
                                        </p>
                                        {metric.improvement && (
                                            <p className="text-sm text-green-600">
                                                {metric.improvement} improvement
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-4 rounded shadow">
                                <h4 className="font-medium text-gray-700 mb-4">
                                    Visualization
                                </h4>
                                {/* In a real app, we'd use Chart.js or similar here */}
                                <div className="h-96">
                                    <SimulationChart data={results.chartData} />
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded shadow">
                                <h4 className="font-medium text-gray-700 mb-2">
                                    Key Takeaways
                                </h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>
                                        Edge computing significantly reduces
                                        latency for real-time applications
                                    </li>
                                    <li>
                                        Total cost of ownership can be reduced
                                        by 30-50%
                                    </li>
                                    <li>
                                        Hybrid approaches offer a good balance
                                        for many use cases
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-32">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
