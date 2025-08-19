"use client";
import { createContext, useContext } from "react";
import { AuthStore, authStore } from "@/stores/authStore";
import { Observer } from "mobx-react-lite";

const AuthContext = createContext<AuthStore>(authStore);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <AuthContext.Provider value={authStore}>
            {/* Observer keeps children reactive to store changes */}
            <Observer>{() => <>{children}</>}</Observer>
        </AuthContext.Provider>
    );
}

export const useAuthStore = () => useContext(AuthContext);
