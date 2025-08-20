"use client";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";
import { useState } from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function SimulationPage() {
    const [devices, setDevices] = useState(100);
    const [latency, setLatency] = useState(50);
    const [bandwidth, setBandwidth] = useState(10);

    // Example calculation
    const simulateData = Array.from({ length: 10 }, (_, i) => ({
        step: i + 1,
        throughput: (devices * bandwidth) / (latency + i * 10),
    }));

    return (
        <div className="p-8 space-y-10">
            <h1 className="text-2xl font-bold text-gray-900">
                Edge Simulation Tool
            </h1>
            <p className="text-gray-600 max-w-2xl">
                Adjust parameters below to simulate system performance under
                different conditions.
            </p>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card title="Number of Devices">
                    <Slider
                        min={10}
                        max={1000}
                        value={devices}
                        onChange={setDevices}
                    />
                    <p className="mt-2 text-sm text-gray-700">
                        {devices} devices
                    </p>
                </Card>

                <Card title="Latency (ms)">
                    <Slider
                        min={10}
                        max={200}
                        value={latency}
                        onChange={setLatency}
                    />
                    <p className="mt-2 text-sm text-gray-700">{latency} ms</p>
                </Card>

                <Card title="Bandwidth (Mbps)">
                    <Slider
                        min={1}
                        max={100}
                        value={bandwidth}
                        onChange={setBandwidth}
                    />
                    <p className="mt-2 text-sm text-gray-700">
                        {bandwidth} Mbps
                    </p>
                </Card>
            </div>

            {/* Results Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-lg font-semibold mb-4">
                    Simulation Results
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={simulateData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="step" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="throughput"
                            stroke="#0D80F2"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
