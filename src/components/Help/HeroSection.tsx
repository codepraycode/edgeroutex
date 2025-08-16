"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const HelpHeroSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        // Handle search functionality here
        console.log("Search query:", searchQuery);
    };

    return (
        <div className="relative min-h-[700px] flex py-40 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center lg:text-left px-4 sm:px-6 lg:px-8 lg:w-[80%] mt-auto mx-auto lg:mx-0">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    How can we help you?
                </h1>

                {/* Subtitle */}
                <p className="text-lg font-semibold sm:text-xl text-white/90 mb-8 mx-auto leading-relaxed">
                    Browse FAQs, contact support or dive into our knowledge base
                    for expert answers.
                </p>

                {/* Search Bar */}
                <div className="">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-7 w-7 text-gray-50" />
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
                            placeholder="Ask questions.."
                            className="w-full pl-16 pr-4 py-4 text-lg font-semibold bg-transparent border border-white/20 rounded-xl text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Optional: Quick action buttons */}
                {/* <div className="flex flex-wrap gap-4 mt-8">
                    <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                        Browse FAQs
                    </button>
                    <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                        Contact Support
                    </button>
                    <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                        Knowledge Base
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default HelpHeroSection;
