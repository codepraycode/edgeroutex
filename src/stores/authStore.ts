'use client'
import { makeAutoObservable, runInAction } from 'mobx'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

export class AuthStore {
  user: User | null = null
  session: Session | null = null
  loading = false
  error: string | null = null;
  unsubscribe: any // add this property

  constructor() {
    makeAutoObservable(this)
    this.bootstrap()
    this.unsubscribe = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      runInAction(() => {
        this.session = session
        this.user = session?.user ?? null
      })
    }).subscription
  }

  dispose() {
    this.unsubscribe?.()
  }


  async bootstrap() {
    this.loading = true
    try {
      const { data, error } = await supabase.auth.getSession()
      runInAction(() => {
        this.session = data.session ?? null
        this.user = data.session?.user ?? null
        this.error = error?.message ?? null
      })
    } catch (err: any) {
      runInAction(() => {
        this.error = err?.message ?? 'Unknown error'
      })
    } finally {
      runInAction(() => {
        this.loading = false
      })
    }
  }


  async signInWithPassword(email: string, password: string) {
    this.loading = true
    this.error = null
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    runInAction(() => {
      this.session = data.session ?? null
      this.user = data.user ?? null
      this.error = error?.message ?? null
      this.loading = false
    })
    if (error) throw error
  }

  /**
   * Create a user with email/password and optional profile fields.
   * If email confirmation is required, `session` will be null until the user verifies.
   */
  async signUpWithPassword(
    email: string,
    password: string,
    profile?: Record<string, any>,
    options?: { emailRedirectTo?: string }
  ) {
    this.loading = true
    this.error = null

    const emailRedirectTo =
      options?.emailRedirectTo ?? (typeof window !== 'undefined' ? `${window.location.origin}/api/auth/callback` : undefined)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: profile, // e.g. { full_name: 'Jane Doe' }
        emailRedirectTo,
      },
    })

    runInAction(() => {
      this.session = data.session ?? null
      this.user = data.user ?? null
      this.error = error?.message ?? null
      this.loading = false
    })

    if (error) throw error
    return data
  }

  async signOut() {
    this.loading = true
    this.error = null
    const { error } = await supabase.auth.signOut()
    runInAction(() => {
      if (!error) {
        this.session = null
        this.user = null
      }
      this.loading = false
      this.error = error?.message ?? null
    })
    if (error) throw error
  }

}

export const authStore = new AuthStore()