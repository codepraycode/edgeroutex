"use client";
import { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import { reports } from "@/data/reports";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { DownloadMenu } from "@/components/form/button";

export default function IndustryReportPage() {
    const { slug } = useParams<{ slug: string }>();
    const report = useMemo(
        () => reports.find((r) => r.summary.slug === slug),
        [slug]
    );
    if (!report) return notFound();

    // chart data from benchmarks
    const chartData = report.benchmarks.map((b, i) => ({
        idx: i + 1,
        metric: b.metric,
        yourOrg: b.yourOrg,
        industryAvg: b.industryAvg,
        topQuartile: b.topQuartile,
    }));

    return (
        <div className="p-8 space-y-10">
            {/* Header */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {report.summary.title}
                        </h1>
                        <p className="text-neutral-700 mt-1">
                            {report.summary.subtitle}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {report.summary.heroStats.map((s) => (
                                <span
                                    key={s.label}
                                    className="text-xs bg-blue-400/50 text-primary-dark px-2 py-1 rounded"
                                >
                                    {s.label}:{" "}
                                    <strong className="ml-1">{s.value}</strong>
                                </span>
                            ))}
                        </div>
                    </div>
                    <DownloadMenu
                        phases={[]} // optional for now
                        recommendations={report.benchmarks.map((b) => ({
                            category: "Benchmark",
                            details: `${b.metric} — Your org: ${b.yourOrg}${
                                b.unit ?? ""
                            } | Industry avg: ${b.industryAvg}${b.unit ?? ""}`,
                            estimatedBudget: "Medium",
                            deploymentComplexity: "Medium",
                        }))}
                    />
                </div>
            </section>

            {/* Executive Summary */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Executive summary
                </h2>
                <p className="text-neutral-700 leading-7">
                    {report.executiveSummary}
                </p>
            </section>

            {/* Trends */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Key trends
                </h2>
                <ul className="space-y-4">
                    {report.trends.map((t) => (
                        <li
                            key={t.title}
                            className="p-4 rounded-lg bg-blue-400/30 border border-blue-400/40"
                        >
                            <p className="font-medium text-primary-dark">
                                {t.title}
                            </p>
                            <p className="text-sm text-neutral-700 mt-1">
                                {t.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Benchmarks */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Benchmarks
                    </h2>
                </div>

                {/* Chart */}
                <div className="w-full h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="metric" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="yourOrg"
                                stroke="#0D80F2"
                                strokeWidth={2}
                            />
                            <Line
                                type="monotone"
                                dataKey="industryAvg"
                                stroke="#61758A"
                                strokeWidth={2}
                            />
                            <Line
                                type="monotone"
                                dataKey="topQuartile"
                                stroke="#17154D"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-blue-400/40">
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                                    Metric
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                                    Your org
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                                    Industry avg
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                                    Top quartile
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {report.benchmarks.map((b) => (
                                <tr key={b.metric}>
                                    <td className="px-4 py-3 text-sm text-neutral-800">
                                        {b.metric}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                        {b.yourOrg}
                                        {b.unit ? ` ${b.unit}` : ""}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {b.industryAvg}
                                        {b.unit ? ` ${b.unit}` : ""}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {b.topQuartile}
                                        {b.unit ? ` ${b.unit}` : ""}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Vendors */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Vendor landscape
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {report.vendors.map((v) => (
                        <div
                            key={v.name}
                            className="border rounded-lg p-4 bg-neutral-100"
                        >
                            <p className="font-semibold text-gray-900">
                                {v.name}
                            </p>
                            <p className="text-xs text-neutral-600 mt-1">
                                {v.category}
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-neutral-800">
                                {v.strengths.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                            {v.cautions && v.cautions.length > 0 && (
                                <>
                                    <p className="text-xs text-neutral-600 mt-2">
                                        Cautions
                                    </p>
                                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-neutral-800">
                                        {v.cautions.map((c) => (
                                            <li key={c}>{c}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {v.website && (
                                <a
                                    href={v.website}
                                    target="_blank"
                                    className="inline-block mt-3 text-primary-blue text-sm underline"
                                >
                                    Website
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
