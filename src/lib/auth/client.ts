
'use client';

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession as nextAuthUseSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


// Custom useSession hook
export function useSession() {
    const { data: session, status } = nextAuthUseSession();
    const router = useRouter();

    async function signOut(options?: { redirectTo?: string }) {
        try {
            const { redirectTo = "/login" } = options || {};
            
            await nextAuthSignOut({ redirect: false });
            router.push(redirectTo);
            router.refresh();
            
            toast.success("Signed out successfully");
        } catch (error) {
            toast.error(
            error instanceof Error 
                ? error.message 
                : "Sign out failed"
            );
            throw error;
        }
    }

    async function signIn(
        provider?: string,
        options?: Record<string, string | boolean>
    ) {
        try {
            const result = await nextAuthSignIn(provider, {
                ...options
            });

            if (result?.error) {
                throw new Error(result.error);
            }

            return result;
        } catch (error) {
            toast.error(
            error instanceof Error 
                ? error.message 
                : "Sign in failed"
            );
            throw error;
        }
    }
  
    return {
        session,
        status,
        isAuthenticated: status === "authenticated",
        isLoading: status === "loading",
        signIn, // Optional: Include if you want all auth methods in one hook
        signOut // Optional: Include if you want all auth methods in one hook
    };
}