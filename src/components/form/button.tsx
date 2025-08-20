"use client";
import { ArrowRight, DownloadIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { RoadmapPhase, RecommendationItem } from "@/types/form.types";


interface NextButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export const NextButton: React.FC<NextButtonProps> = ({
    onClick,
    disabled = false,
    loading = false,
    children = "NEXT",
    className = "",
    fullWidth = false,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        bg-blue-500 hover:bg-blue-600 active:bg-blue-700
        text-white font-semibold text-sm
        px-6 py-3 rounded-lg
        flex items-center justify-center gap-2
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        disabled:bg-gray-400 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
        >
            {loading ? (
                <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    LOADING...
                </>
            ) : (
                <>
                    {children}
                    <ArrowRight className="w-4 h-4" />
                </>
            )}
        </button>
    );
};

interface DownloadMenuProps {
    phases: RoadmapPhase[];
    recommendations?: RecommendationItem[];
}

export const DownloadMenu: React.FC<DownloadMenuProps> = ({
    phases,
    recommendations,
}) => {
    const [open, setOpen] = useState(false);

    // --- Handlers ---
    const downloadJSON = () => {
        const data = { roadmap: phases, recommendations };
        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
        });
        saveAs(blob, "strategy.json");
    };

    const downloadCSV = () => {
        const header = "Phase,Title,Duration,Status,Details\n";
        const rows = phases
            .map(
                (p) =>
                    `${p.id},"${p.title}","${p.duration}","${p.status}","${
                        p.details ?? ""
                    }"`
            )
            .join("\n");
        const csvContent = header + rows;
        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        saveAs(blob, "roadmap.csv");
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Edge Strategy Roadmap", 10, 10);

        phases.forEach((phase, idx) => {
            doc.setFontSize(12);
            doc.text(
                `${idx + 1}. ${phase.title} (${phase.duration}) - ${
                    phase.status
                }`,
                10,
                20 + idx * 10
            );
        });

        doc.save("roadmap.pdf");
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2"
            >
                <DownloadIcon className="w-4 h-4" />
                Download Roadmap
                <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button
                        onClick={downloadJSON}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        JSON
                    </button>
                    <button
                        onClick={downloadCSV}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        CSV
                    </button>
                    <button
                        onClick={downloadPDF}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        PDF
                    </button>
                </div>
            )}
        </div>
    );
};
