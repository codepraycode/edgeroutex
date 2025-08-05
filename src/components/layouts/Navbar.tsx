"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useSession } from "@/lib/auth/client";

export default function Navbar() {
    const pathname = usePathname();
    const {signOut} = useSession();

    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/recommendations", label: "Recommendations" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/simulate", label: "Simulations" },
    ];

    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-lg font-semibold">
                            EdgeAdvisory
                        </Link>
                        <nav className="ml-8 hidden md:block">
                            <ul className="flex space-x-4">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`px-3 py-2 text-sm font-medium ${
                                                pathname.startsWith(link.href)
                                                    ? "text-black border-b-2 border-primary"
                                                    : "text-gray-500 hover:text-gray-700"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
