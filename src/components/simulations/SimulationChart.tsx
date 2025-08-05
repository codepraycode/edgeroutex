/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type SimulationChartProps = {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
        }[];
    };
};

export default function SimulationChart({ data }: SimulationChartProps) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        let label = context.dataset.label || "";
                        if (label) label += ": ";
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(context.parsed.y);
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (this: import("chart.js").Scale<import("chart.js").CoreScaleOptions>, tickValue: string | number) {
                        const value = Number(tickValue);
                        if (value >= 1000000) {
                            return `$${(value / 1000000).toFixed(1)}M`;
                        }
                        if (value >= 1000) {
                            return `$${(value / 1000).toFixed(1)}K`;
                        }
                        return `$${value}`;
                    },
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}
