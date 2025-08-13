import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/providers/AuthProvider";
import "./globals.css";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
            >
                <AuthProvider>
                    <main className="min-h-screen">
                        {children}
                        {/* <ThemeToggler /> */}
                        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                            </div> */}
                    </main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
