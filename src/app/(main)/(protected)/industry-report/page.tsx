"use client";
import Link from "next/link";
import { reports } from "@/data/reports";

export default function IndustryReportIndex() {
    return (
        <div className="p-8 space-y-10">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                    Industry reports
                </h1>
                <p className="text-neutral-600">
                    Deep dives, benchmarks, and vendor maps — updated regularly.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {reports.map((r) => (
                    <Link
                        key={r.summary.slug}
                        href={`/industry-report/${r.summary.slug}`}
                        className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {r.summary.title}
                            </h3>
                            <span className="text-xs text-neutral-600">
                                Updated{" "}
                                {new Date(
                                    r.summary.updatedAt
                                ).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-sm text-neutral-700 mb-4">
                            {r.summary.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {r.summary.heroStats.map((s) => (
                                <span
                                    key={s.label}
                                    className="text-xs bg-blue-400/50 text-primary-dark px-2 py-1 rounded"
                                >
                                    {s.label}:{" "}
                                    <strong className="ml-1">{s.value}</strong>
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 flex gap-2">
                            {r.summary.tags.slice(0, 4).map((t) => (
                                <span
                                    key={t}
                                    className="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
