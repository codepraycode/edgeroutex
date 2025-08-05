/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import { AuthError } from '@/lib/errors';
import { getServerSession } from "next-auth";
import { authOptions } from './config';



export async function serverSession(req: NextRequest, res: NextResponse) {
    
    try {
        const session = await getServerSession(req as any, res as any, authOptions)
      
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
