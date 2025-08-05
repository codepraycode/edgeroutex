// src/lib/auth.ts

"use server"
import nextAuth from "@/auth";
import { NextRequest } from 'next/server';
import { AuthError } from '@/lib/errors';

/**
 * Retrieves the server session with proper typing
 * @param req Optional Next.js request object
 * @returns Promise<Session>
 * @throws AuthError if session is invalid or unavailable
 */
export async function getServerSession(req?: NextRequest) {
  try {
    const session = await nextAuth(req);
    
    if (!session) {
      throw new AuthError('Not authenticated');
    }

    if (!session.user?.id || !session.user?.role) {
      throw new AuthError('Session missing required user data');
    }

    return {
      ...session,
      user: {
        ...session.user,
        id: session.user.id,
        role: session.user.role
      }
    };
  } catch (error) {
    console.error('Session error:', error);
    
    if (error instanceof AuthError) {
      throw error;
    }
    
    throw new AuthError('Failed to get session');
  }
}

// // Re-export other auth utilities
// export { handlers, signIn, signOut } from '@/auth';