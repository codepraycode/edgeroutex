"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CaseStudy, createCaseStudy, updateCaseStudy } from "@/lib/case-studies/data";

type CaseStudyFormProps = {
    initialData?: {
        id?: number;
        title?: string;
        description?: string;
        environment?: string;
        vehicleType?: string[];
        challenges?: string[];
        solutions?: string[];
        outcomes?: string[];
    };
};

export default function CaseStudyForm({ initialData }: CaseStudyFormProps) {
    const router = useRouter();
    const isEditing = !!initialData?.id;

    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        environment: initialData?.environment || "urban",
        vehicleType: initialData?.vehicleType?.join(", ") || "",
        challenges: initialData?.challenges?.join("\n") || "",
        solutions: initialData?.solutions?.join("\n") || "",
        outcomes: initialData?.outcomes?.join("\n") || "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const data: Partial<CaseStudy> = {
                title: formData.title,
                description: formData.description,
                environment: formData.environment as CaseStudy["environment"],
                vehicleType: formData.vehicleType
                    .split(",")
                    .map((item) => item.trim()),
                challenges: formData.challenges
                    .split("\n")
                    .filter((item) => item.trim()),
                solutions: formData.solutions
                    .split("\n")
                    .filter((item) => item.trim()),
                outcomes: formData.outcomes
                    .split("\n")
                    .filter((item) => item.trim()),
            };

            if (isEditing && initialData?.id) {
                await updateCaseStudy(initialData.id, data);
            } else {
                await createCaseStudy(data as CaseStudy);
            }

            router.push("/admin/case-studies");
        } catch (err) {
            setError("Failed to save case study. Please try again.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
            {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-5 w-5 text-red-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                </label>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        })
                    }
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Environment *
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.environment}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            environment: e.target.value,
                        })
                    }
                    required
                >
                    <option value="urban">Urban</option>
                    <option value="rural">Rural</option>
                    <option value="highway">Highway</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Types (comma separated) *
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.vehicleType}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            vehicleType: e.target.value,
                        })
                    }
                    placeholder="e.g., trucks, buses, emergency"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Challenges (one per line) *
                </label>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    value={formData.challenges}
                    onChange={(e) =>
                        setFormData({ ...formData, challenges: e.target.value })
                    }
                    placeholder="Enter each challenge on a new line"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Solutions (one per line) *
                </label>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    value={formData.solutions}
                    onChange={(e) =>
                        setFormData({ ...formData, solutions: e.target.value })
                    }
                    placeholder="Enter each solution on a new line"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Outcomes (one per line) *
                </label>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    value={formData.outcomes}
                    onChange={(e) =>
                        setFormData({ ...formData, outcomes: e.target.value })
                    }
                    placeholder="Enter each outcome on a new line"
                    required
                />
            </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => router.push("/admin/case-studies")}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition"
                    disabled={isSubmitting}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Saving..." : "Save Case Study"}
                </button>
            </div>
        </form>
    );
}
