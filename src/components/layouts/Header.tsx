"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useSession } from "@/lib/auth/client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile icons

export default function Header() {
    const pathname = usePathname();
    const { signOut } = useSession();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/recommendations", label: "Recommendations" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/simulate", label: "Simulations" },
    ];

    return (
        <header className="sticky-header">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand + Desktop Nav */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-lg font-semibold text-foreground"
                        >
                            EdgeAdvisory
                        </Link>
                        <nav className="ml-8 hidden md:block">
                            <ul className="flex space-x-4">
                                {links.map((link) => {
                                    const isActive = pathname.startsWith(
                                        link.href
                                    );
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
                                                    isActive
                                                        ? "text-foreground border-primary"
                                                        : "text-muted-foreground hover:text-foreground border-transparent"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => signOut()}
                            className="hidden sm:inline-flex"
                        >
                            Sign Out
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-foreground"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-background shadow-sm animate-slide-down">
                    <ul className="flex flex-col p-4 space-y-3">
                        {links.map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                            isActive
                                                ? "text-foreground bg-muted"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-2 border-t border-border">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => {
                                    signOut();
                                    setMobileOpen(false);
                                }}
                            >
                                Sign Out
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
