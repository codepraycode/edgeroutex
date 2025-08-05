import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Edge Computing Advisory",
    description:
        "Web-Based Advisory Framework for Edge Computing Implementation",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} antialiased bg-gray-50 text-gray-900`}
            >
                <AuthProvider>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-1">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                                {children}
                            </div>
                        </main>
                        <footer className="border-t bg-white py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                                © {new Date().getFullYear()} Edge Computing
                                Advisory Framework
                            </div>
                        </footer>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
