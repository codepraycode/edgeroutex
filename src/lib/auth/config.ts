/* eslint-disable @typescript-eslint/no-explicit-any */
import Credentials from "next-auth/providers/credentials";
import api from "../api/client";
import { DefaultSession } from "next-auth";


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
export const authOptions = {
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
}