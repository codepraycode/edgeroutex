'use client'
import { useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useAuthStore } from '@/providers/AuthProvider'
import toast from 'react-hot-toast'

export function useAuth() {
  const store = useAuthStore()

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

  const signOut = useCallback(async () => {
    await store.signOut()
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
  }
}