"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredArticles = [
    {
        id: 1,
        title: "Top 5 mistakes to avoid when deploying edge solutions.",
        description:
            "Edge computing enables autonomous vehicles to process sensor data locally...",
        views: "80+ views",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
        link: "/articles/top-5-mistakes-edge-deployment",
    },
    {
        id: 2,
        title: "Top 5 mistakes to avoid when deploying edge solutions.",
        description:
            "Edge computing enables autonomous vehicles to process sensor data locally...",
        views: "80+ views",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
        link: "/articles/top-5-mistakes-edge-deployment-2",
    },
    {
        id: 3,
        title: "Top 5 mistakes to avoid when deploying edge solutions.",
        description:
            "Edge computing enables autonomous vehicles to process sensor data locally...",
        views: "80+ views",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
        link: "/articles/top-5-mistakes-edge-deployment-3",
    },
];

export default function FeaturedArticlesSection() {
    const [isExpanded, setIsExpanded] = useState(true);


    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="">
                {/* Section Header with Toggle */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Featured articles
                    </h2>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        aria-label={
                            isExpanded ? "Collapse section" : "Expand section"
                        }
                    >
                        {isExpanded ? (
                            <ChevronUp className="h-6 w-6 text-gray-600" />
                        ) : (
                            <ChevronDown className="h-6 w-6 text-gray-600" />
                        )}
                    </button>
                </div>

                {/* Articles Grid - Collapsible */}
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded
                            ? "max-h-[2000px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={article.link}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                {/* Article Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Article Content */}
                                <div className="p-6">
                                    {/* Article Title */}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                        {article.title}
                                    </h3>

                                    {/* Article Description */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {article.description}
                                    </p>

                                    {/* Article Footer */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {article.views}
                                        </span>
                                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
