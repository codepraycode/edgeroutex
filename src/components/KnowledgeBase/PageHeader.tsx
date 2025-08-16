"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function KnowledgePageHeader() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All",
        "Simulation",
        "Deployment",
        "Security",
        "Roadmap",
        "Integration",
        "Performance",
    ];

    const handleSearch = () => {
        // Handle search functionality here
        console.log("Search query:", searchQuery);
    };
    return (
        <>
            <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Edge insights & solutions
                </h2>
                <p className="text-gray-600 max-w-2xl">
                    Browse categorized articles to learn, solve problems and
                    make smarter edge deployment decisions.
                </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category, index) => (
                        <button
                            key={`${category}-${index}`}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeCategory === category
                                    ? "bg-blue-500 text-white shadow-sm"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl">
                <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        placeholder="Search.."
                        className="w-full pl-4 pr-12 py-3 text-base bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>
            </div>
        </>
    );
}


export function KnowledgePageHeaderV2() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All",
        "Simulation",
        "Deployment",
        "Security",
        "Roadmap",
        "Integration",
        "Performance",
    ];

    const handleSearch = () => {
        // Handle search functionality here
        console.log("Search query:", searchQuery);
    };

    return (
        <>
            {/* Header Section with Search */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                {/* Header Content */}
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Edge insights & solutions
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        Browse categorized articles to learn, solve problems and
                        make smarter edge deployment decisions.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="lg:w-80 lg:flex-shrink-0">
                    <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="Search.."
                            className="w-full pl-4 pr-12 py-3 text-base bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>
            </div>

            {/* Category Filter Tags - Full Width Below */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                        <button
                            key={`${category}-${index}`}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeCategory === category
                                    ? "bg-blue-500 text-white shadow-sm"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}