"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Sidebar context type definition
interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
    isMobile: boolean;
}

// Create the context with undefined as initial value
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Props for the provider component
interface SidebarProviderProps {
    children: React.ReactNode;
}

// Sidebar provider component
export const SidebarProvider: React.FC<SidebarProviderProps> = ({
    children,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = (): void => {
            const mobile = window.innerWidth < 1024; // lg breakpoint
            setIsMobile(mobile);

            // Auto-close sidebar on mobile when screen becomes desktop
            if (!mobile && isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [isSidebarOpen]);

    // Close sidebar when clicking outside (on mobile)
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent): void => {
            if (!isMobile || !isSidebarOpen) return;

            const target = event.target as Element;
            const sidebar = document.getElementById("mobile-sidebar");
            const toggleButton = document.getElementById("sidebar-toggle");

            // Close if clicking outside sidebar and not on toggle button
            if (
                sidebar &&
                !sidebar.contains(target) &&
                toggleButton &&
                !toggleButton.contains(target)
            ) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, [isMobile, isSidebarOpen]);

    // Prevent body scroll when mobile sidebar is open
    useEffect(() => {
        if (isMobile && isSidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobile, isSidebarOpen]);

    // Context functions
    const toggleSidebar = (): void => {
        setIsSidebarOpen((prev) => !prev);
    };

    const closeSidebar = (): void => {
        setIsSidebarOpen(false);
    };

    const openSidebar = (): void => {
        setIsSidebarOpen(true);
    };

    // Context value
    const contextValue: SidebarContextType = {
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        openSidebar,
        isMobile,
    };

    return (
        <SidebarContext.Provider value={contextValue}>
            {children}
        </SidebarContext.Provider>
    );
};

// Custom hook to use sidebar context
export const useSidebar = (): SidebarContextType => {
    const context = useContext(SidebarContext);

    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }

    return context;
};
