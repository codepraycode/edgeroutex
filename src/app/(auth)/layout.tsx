
import { Logo2 } from "@/components/common/Logo";

export default function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen lg:flex">
            <div className="md:w-[50%] max-w-full bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
                    <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-400 rounded-full blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="text-white">
                        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
                        <h2 className="text-2xl font-semibold mb-2">
                            First things first...
                        </h2>
                        <p className="text-blue-100 text-lg">
                            Register your account to get started.
                        </p>
                    </div>

                    {/* Illustration Container */}
                    <div className="mt-16 flex justify-center">
                        <div className="relative">
                            {/* Main illustration card */}
                            <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 w-80 h-56">
                                <div className="flex items-center justify-center h-full">
                                    {/* Placeholder for your illustration */}
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                            {/* Replace with your actual image */}
                                            <svg
                                                className="w-8 h-8 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 bg-gray-200 rounded w-24 mx-auto"></div>
                                            <div className="h-2 bg-gray-200 rounded w-32 mx-auto"></div>
                                            <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone mockup */}
                            <div className="absolute -left-8 top-8 bg-gray-800 rounded-2xl p-2 w-20 h-32 shadow-xl transform -rotate-12">
                                <div className="bg-white rounded-lg w-full h-full flex flex-col">
                                    <div className="h-4 bg-gray-100 rounded-t-lg"></div>
                                    <div className="flex-1 bg-white p-2 space-y-1">
                                        <div className="h-1 bg-gray-200 rounded w-full"></div>
                                        <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -right-4 -top-2">
                                <div className="flex space-x-1">
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col space-y-1"
                                        >
                                            {[...Array(4)].map((_, j) => (
                                                <div
                                                    key={j}
                                                    className="w-1 h-1 bg-white rounded-full opacity-60"
                                                ></div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <Logo2 />
            </div>

            {children}
        </div>
    );
}
