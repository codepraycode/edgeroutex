import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession();

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <main className="container mx-auto px-4 py-24 sm:py-32">
                {/* Hero Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
                        Edge Computing Advisory Framework
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
                        Intelligent guidance for implementing edge computing
                        solutions in modern transportation systems
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="group">
                            <Link
                                href="/login"
                                className="flex items-center gap-2"
                            >
                                Get Started
                                <span className="group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="hover:bg-accent/50"
                        >
                            <Link
                                href="/case-studies"
                                className="flex items-center gap-2"
                            >
                                View Case Studies
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mt-24 sm:mt-32">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Transform Your Transportation Network
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our framework delivers cutting-edge solutions
                            tailored to your infrastructure needs
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Personalized Recommendations",
                                description:
                                    "AI-powered analysis provides customized edge computing strategies for your specific operational requirements",
                                icon: "⚡",
                                bgColor: "bg-blue-100 dark:bg-blue-900/30",
                            },
                            {
                                title: "Implementation Roadmaps",
                                description:
                                    "Detailed, phased deployment plans with milestones and resource allocation guidance",
                                icon: "🗺️",
                                bgColor: "bg-purple-100 dark:bg-purple-900/30",
                            },
                            {
                                title: "Case Studies",
                                description:
                                    "Proven implementations from leading transportation networks worldwide",
                                icon: "📚",
                                bgColor: "bg-green-100 dark:bg-green-900/30",
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className={`group relative overflow-hidden rounded-xl p-6 shadow-sm transition-all hover:shadow-lg ${feature.bgColor}`}
                            >
                                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-black/10" />
                                <div className="relative z-10">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow mb-6 text-2xl">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                    <div className="mt-4">
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="px-0"
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-24 sm:mt-32 text-center">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready to optimize your edge infrastructure?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Join industry leaders revolutionizing their
                            transportation networks
                        </p>
                        <div className="mt-8">
                            <Button asChild size="default" className="text-lg">
                                <Link href="/login">Start Your Assessment</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
