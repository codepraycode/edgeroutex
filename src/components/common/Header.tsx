"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import { useAuth } from "@/hooks/useAuth";

const Header: React.FC = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const {signOut, user} = useAuth();

    return (
        <header className="relative">
            {/* Mobile Header */}
            <div className="lg:hidden bg-neutral-100 px-4 py-4">
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="flex items-center space-x-3">
                        {user ? (
                            <button
                                onClick={signOut}
                                className="px-4 py-2 border border-neutral-900 rounded-lg text-neutral-900 font-semibold text-sm hover:bg-neutral-900 hover:text-neutral-50 transition-colors"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                href="/signin"
                                className="px-4 py-2 border border-neutral-900 rounded-lg text-neutral-900 font-semibold text-sm hover:bg-neutral-900 hover:text-neutral-50 transition-colors"
                            >
                                Sign In
                            </Link>
                        )}

                        {/* Hamburger Menu Button */}
                        <button
                            id="sidebar-toggle"
                            onClick={toggleSidebar}
                            type="button"
                            className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-colors"
                            aria-label="Toggle mobile sidebar"
                            aria-expanded={isSidebarOpen}
                        >
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-200 ${
                                    isSidebarOpen ? "rotate-90" : ""
                                }`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isSidebarOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block absolute top-0 right-0 z-10 p-6">
                {user ? (
                    <button
                        onClick={signOut}
                        className="px-6 py-3 border border-neutral-50 rounded-lg text-neutral-50 font-semibold hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                    >
                        Sign Out
                    </button>
                ) : (
                    <Link
                        href="/signin"
                        className="px-6 py-3 border border-neutral-50 rounded-lg text-neutral-50 font-semibold hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
