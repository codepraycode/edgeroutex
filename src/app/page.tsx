import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getServerSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="py-12 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Edge Computing Advisory Framework
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    Intelligent guidance for implementing edge computing
                    solutions in transportation systems
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/login">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/case-studies">View Case Studies</Link>
                    </Button>
                </div>
            </div>

            <div className="mt-24 border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-semibold text-center">
                    Key Features
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Personalized Recommendations",
                            description:
                                "Get tailored edge computing solutions based on your specific transportation scenario",
                            icon: "⚡",
                        },
                        {
                            title: "Implementation Roadmaps",
                            description:
                                "Step-by-step guides for deploying edge computing solutions",
                            icon: "🗺️",
                        },
                        {
                            title: "Case Studies",
                            description:
                                "Learn from real-world implementations across different environments",
                            icon: "📚",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white p-6 rounded-lg shadow-sm border"
                        >
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-medium">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
