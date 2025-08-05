"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TransportInputForm() {
    const [formData, setFormData] = useState({
        fleetSize: "",
        vehicleType: "mixed",
        dataNeeds: ["real-time"],
        environment: "urban",
        currentInfra: "cloud",
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we'd validate here

        // Redirect to recommendations
        router.push("/recommendations");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Fleet Size
                </label>
                <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    value={formData.fleetSize}
                    onChange={(e) =>
                        setFormData({ ...formData, fleetSize: e.target.value })
                    }
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Primary Vehicle Type
                </label>
                <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    value={formData.vehicleType}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            vehicleType: e.target.value,
                        })
                    }
                >
                    <option value="mixed">Mixed Fleet</option>
                    <option value="trucks">Commercial Trucks</option>
                    <option value="buses">Public Transit Buses</option>
                    <option value="emergency">Emergency Vehicles</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
            >
                Generate Recommendations
            </button>
        </form>
    );
}
