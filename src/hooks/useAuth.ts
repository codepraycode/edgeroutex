'use client'
import { useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useAuthStore } from '@/providers/AuthProvider'
import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'


export function useAuth() {
  const store = useAuthStore();
  const searchParams = useSearchParams();
  const router = useRouter()

  const signIn = useCallback(async (email: string, password: string) => {
    await store.signInWithPassword(email, password)
    // console.debug({session, user})
    
  }, [store])

  const signUp = useCallback(
    async (
      email: string,
      password: string,
      profile?: Record<string, any>,
      options?: { emailRedirectTo?: string }
    ) => {
      const {user} = await store.signUpWithPassword(email, password, profile, options);

      if (!user) {
        toast.error("Sign up failed");
    } else {
        toast.success("Check your email to confirm your account!: " + user.email);
    }
    },
    [store]
  )

  const redirectAfterAuth = useCallback(() => {
    const redirectUrl = searchParams.get('redirect')
    const decodedRedirect = redirectUrl ? decodeURIComponent(redirectUrl) : '/'
    router.push(decodedRedirect)
  }, [searchParams, router])
  
  const redirectToLink = useCallback((path:string) => {
    const redirectUrl = searchParams.get('redirect');
    // If there's a redirect parameter, append it to /signup
    const targetUrl = redirectUrl 
      ? `${path}?redirect=${encodeURIComponent(redirectUrl)}` 
      : path;
    // router.push(targetUrl);
    return targetUrl;
  }, [searchParams, router]);

  const signOut = useCallback(async () => {
    toast.loading("Signin out...", {id: "signOutToast", duration: 0})
    await store.signOut()
    toast.success("Signed out", {id: "signOutToast", duration: 2000})

  }, [store])

  const signInWithProvider = useCallback(async (provider: 'google' | 'facebook') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }, [])

  return {
    user: store.user,
    session: store.session,
    loading: store.loading,
    error: store.error,
    signIn,
    signUp, // ✅ now supports profile fields + redirect option
    signOut,
    signInWithProvider,
    redirectAfterAuth,
    redirectToLink
  }
}