"use client";

import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function SupabaseFeedback() {
    const [hashParams, setHashParams] = useState<URLSearchParams | null>(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash.substring(1);
            if (hash) {
                setHashParams(new URLSearchParams(hash));
            }
        }
    }, []);

    useEffect(() => {
        if (hashParams) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 6000); // hide after 6 seconds
            return () => clearTimeout(timer);
        }
    }, [hashParams]);

    if (!hashParams || !visible) return null;

    const error = hashParams.get("error");
    const errorCode = hashParams.get("error_code");
    const errorDescription = hashParams.get("error_description");

    if (!error) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 max-w-sm rounded-2xl bg-red-100 border border-red-400 p-4 shadow-lg flex items-start space-x-3 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="flex-1 text-sm text-red-800">
                <p className="font-semibold">Authentication Error</p>
                {errorCode && <p className="mt-1">Code: {errorCode}</p>}
                {errorDescription && (
                    <p className="mt-1">
                        {decodeURIComponent(errorDescription)}
                    </p>
                )}
            </div>
        </div>
    );
}
