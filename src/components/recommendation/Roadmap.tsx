import { RoadmapProps } from "@/types/form.types";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export const RecommendationRoadmap: React.FC<RoadmapProps> = ({
    phases,
    architectureDiagramUrl,
    className = "",
}) => {
    const [selectedPhase, setSelectedPhase] = useState<number | null>(
        null
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "text-green-700 bg-green-100 border-green-300";
            case "in-progress":
                return "text-blue-700 bg-blue-100 border-blue-300";
            case "upcoming":
                return "text-gray-600 bg-gray-100 border-gray-300";
            default:
                return "text-gray-600 bg-gray-100 border-gray-300";
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-700 border-green-200";
            case "in-progress":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "upcoming":
                return "bg-gray-100 text-gray-600 border-gray-200";
            default:
                return "bg-gray-100 text-gray-600 border-gray-200";
        }
    };

    const getConnectorColor = (currentStatus: string, nextStatus: string) => {
        if (currentStatus === "completed") {
            return "bg-green-300";
        } else if (currentStatus === "in-progress") {
            return "bg-blue-300";
        }
        return "bg-gray-200";
    };

    return (
        <div
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}
        >
            {/* Header Section */}
            <div className="mb-6">
                {architectureDiagramUrl && (
                    <div className="mb-4">
                        <a
                            href={architectureDiagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all hover:gap-3"
                        >
                            Architecture diagram
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                        Step by step roadmap
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>
                            {
                                phases.filter((p) => p.status === "completed")
                                    .length
                            }
                        </span>
                        <span>/</span>
                        <span>{phases.length}</span>
                        <span>completed</span>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{
                            width: `${
                                (phases.filter((p) => p.status === "completed")
                                    .length /
                                    phases.length) *
                                100
                            }%`,
                        }}
                    />
                </div>
            </div>

            {/* Roadmap Phases */}
            <div className="relative space-y-1">
                {phases.map((phase, index) => {
                    const IconComponent = phase.icon;
                    const isSelected = selectedPhase === phase.id;

                    return (
                        <div key={phase.id + "nd" + index} className="relative">
                            <div
                                className={`flex items-start gap-4 p-4 rounded-lg transition-all cursor-pointer hover:bg-gray-50 ${
                                    isSelected
                                        ? "bg-blue-50 border border-blue-200"
                                        : ""
                                }`}
                                onClick={() =>
                                    setSelectedPhase(
                                        isSelected ? null : phase.id
                                    )
                                }
                            >
                                {/* Icon */}
                                <div
                                    className={`p-3 rounded-xl border-2 ${getStatusColor(
                                        phase.status
                                    )} shadow-sm`}
                                >
                                    <IconComponent className="w-5 h-5" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {phase.title}
                                        </h4>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(
                                                phase.status
                                            )}`}
                                        >
                                            {phase.status.replace("-", " ")}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 font-medium">
                                        {phase.duration}
                                    </p>

                                    {isSelected && (
                                        <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                                            <p className="text-sm text-gray-700">
                                                Additional details for{" "}
                                                {phase.title} phase will be
                                                displayed here. This could
                                                include tasks, deliverables, and
                                                progress updates.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Connector Line */}
                            {index < phases.length - 1 && (
                                <div className="absolute left-9 top-20 w-0.5 h-8 bg-gray-300" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Summary Stats */}
            {/* <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-green-600">
                            {
                                phases.filter((p) => p.status === "completed")
                                    .length
                            }
                        </div>
                        <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-blue-600">
                            {
                                phases.filter((p) => p.status === "in-progress")
                                    .length
                            }
                        </div>
                        <div className="text-xs text-gray-500">In Progress</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-600">
                            {
                                phases.filter((p) => p.status === "upcoming")
                                    .length
                            }
                        </div>
                        <div className="text-xs text-gray-500">Upcoming</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
