import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <header className="relative">
            {/* Mobile Header */}
            <div className="lg:hidden bg-neutral-100 px-4 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <button className="px-4 py-2 border border-neutral-50 rounded-lg text-neutral-50 font-semibold text-sm">
                        Sign In
                    </button>
                </div>
            </div>

            {/* Desktop Header - Positioned over hero image */}
            <div className="hidden lg:block absolute top-0 right-0 z-10 p-6">
                <button className="px-6 py-3 border border-neutral-50 rounded-lg text-neutral-50 font-semibold">
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Header;
