/* eslint-disable @typescript-eslint/no-explicit-any */
// src/auth.ts

import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import api from './lib/api/client';

// Type extensions
declare module "next-auth" {
  interface User {
    id: string;
    role: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}

const API_URL = 'http://localhost:3001';

// Main auth configuration
const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          if (!credentials) return null;
          const response = await api.get(`${API_URL}/users?email=${credentials.email}`);
          const users = response.data;
          
          if (users.length === 0) return null;
          
          const user = users[0];
          
          if (credentials.password === user.password) {
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              role: user.role
            };
          }
          
          return null;
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt' as const
  }
};

// Create the auth handler
const { handlers, auth: nextAuth, signIn, signOut } = NextAuth(authConfig);

// Export everything
export { handlers, nextAuth as auth, signIn, signOut };

// Export the configured NextAuth instance
export default NextAuth(authConfig);