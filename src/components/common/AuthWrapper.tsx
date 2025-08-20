"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

interface AuthProtectedWrapperProps {
    children: React.ReactNode;
}

export default function AuthProtectedWrapper({
    children,
}: AuthProtectedWrapperProps) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (!loading) {
            // If not authenticated, redirect to login with return URL
            if (!user) {
                router.push(
                    `/signin?redirect=${encodeURIComponent(pathname)}`
                );
            } else {
                setIsChecking(false);
            }
        }
    }, [user, loading, router, pathname]);

    // Show loading spinner while checking authentication
    if (loading || isChecking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="ml-2 text-gray-600">
                    Checking authentication...
                </span>
            </div>
        );
    }

    // If user is authenticated, render the children
    return user ? <>{children}</> : null;
}
