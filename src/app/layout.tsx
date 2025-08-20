import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { AuthProvider } from "@/providers/AuthProvider";
import { SupabaseFeedback } from "@/components/ui/SupabaseFeedback";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Edge Advisory Platform | Smart Roadmaps & Industry Reports",
    description:
        "Get tailored edge computing strategies for transportation and mobility. Explore case studies, run simulations, and download industry reports to guide your digital transformation.",
    keywords: [
        "edge computing",
        "transportation",
        "advisory framework",
        "roadmap",
        "industry reports",
        "simulation tool",
        "smart mobility",
    ],
    authors: [{ name: "EdgeRouteX" }],
    openGraph: {
        title: "Edge Advisory Platform | Smart Roadmaps & Industry Reports",
        description:
            "Personalized guidance for adopting edge computing in transportation. Generate strategies, explore benchmarks, and compare with industry best practices.",
        type: "website",
        url: "https://edgerx.vercel.app/",
        siteName: "Edge Advisory",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Edge Advisory Platform | Smart Roadmaps & Industry Reports",
    //     description:
    //         "Adopt edge computing with confidence — explore case studies, simulations, and vendor benchmarks.",
    //     creator: "@yourhandle",
    // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider>
                  {children}
                  <SupabaseFeedback/>
                </AuthProvider>

                <Toaster/>
            </body>
        </html>
    );
}
