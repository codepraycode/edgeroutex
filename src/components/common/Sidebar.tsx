"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import clsx from "clsx";
import { useSidebar } from "@/context/SidebarContext";

interface NavigationItem {
    id: string;
    label: string;
    icon: string;
    isActive?: boolean;
    link?: string;
}


const navigationItems: NavigationItem[] = [
    {
        id: "case-study",
        label: "Case study explorer",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/0MpYeTVsXd.svg",
        isActive: true,
        link: "/"
    },
    {
        id: "recommendation",
        label: "Recommendation engine",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/eDu9ntBJ9z.svg",
        link: "/recommendation"
    },
    {
        id: "knowledge",
        label: "Knowledge base",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/5zVoNR1rVC.svg",
        link: "/knowledge-base"
    },
    {
        id: "help",
        label: "Help & support",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/y5C5GrgGsn.svg",
        link: "/help",
    },
];
export default function SideBar() {
    const { isSidebarOpen, closeSidebar, isMobile } = useSidebar();

    return (
        <>
            {/* Mobile Overlay */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                id="mobile-sidebar"
                className={clsx(
                    // Base classes for desktop (always visible)
                    "lg:block lg:w-96 lg:fixed lg:h-screen lg:overflow-y-auto",
                    // Mobile classes
                    "fixed top-0 left-0 h-screen w-80 z-50 overflow-y-auto",
                    "transform transition-transform duration-300 ease-in-out",
                    {
                        // Mobile show/hide logic
                        "translate-x-0": isMobile && isSidebarOpen,
                        "-translate-x-full": isMobile && !isSidebarOpen,
                        // Desktop is always visible (translate-x-0 by default)
                        "lg:translate-x-0": true,
                    }
                )}
            >
                <nav className="w-full h-full bg-neutral-100 p-10">
                    <div className="mb-16 flex items-center justify-between">
                        <Logo />

                        {/* Close button for mobile only */}
                        {isMobile && (
                            <button
                                onClick={closeSidebar}
                                type="button"
                                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-colors"
                                aria-label="Close sidebar"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <NavigationMenu />
                </nav>
            </aside>
        </>
    );
}
const NavigationMenu: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="space-y-4">
            <nav className="space-y-4">
                {navigationItems.map((item) => {
                    // Check if current path matches the item's link
                    const isActive =
                        pathname === item.link || pathname === `#${item.id}`;

                    return (
                        <Link
                            key={item.id}
                            href={item.link ?? `#${item.id}`}
                            data-active={isActive}
                            className={"flex items-center gap-3 px-4 py-4 rounded-lg transition-colors"}
                        >
                            <img src={item.icon} alt="" className="w-6 h-6" />
                            <span className="font-semibold">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </nav>
    );
};
