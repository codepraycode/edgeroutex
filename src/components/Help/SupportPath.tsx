import Link from "next/link";

const supportPaths = [
    {
        id: "knowledge-base",
        title: "Knowledge base",
        description:
            "Get clear, actionable solutions to common challenges in edge computing.",
        link: "/knowledge-base",
        linkText: "View Knowledge base",
    },
    {
        id: "qa",
        title: "Q&A",
        description:
            "Ask questions and get expert-backed answers from our team or community.",
        link: "/qa",
        linkText: "View Q&A",
    },
    {
        id: "troubleshooting",
        title: "Troubleshooting",
        description:
            "Having issues? Find step by step solutions for common technical problems.",
        link: "/troubleshooting",
        linkText: "Start Troubleshooting",
    },
];

export default function SupportPathSection() {
    

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="">
                {/* Section Header */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
                    Choose a support path
                </h2>

                {/* Support Path Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supportPaths.map((path) => (
                        <div
                            key={path.id}
                            className="bg-indigo-900 rounded-2xl p-8 text-white hover:bg-indigo-800 transition-colors duration-300 group"
                        >
                            {/* Card Title */}
                            <h3 className="text-xl font-semibold mb-4">
                                {path.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-indigo-100 leading-relaxed mb-6">
                                {path.description}
                            </p>

                            {/* Card Link */}
                            <Link
                                href={path.link}
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                            >
                                {path.linkText}
                                <svg
                                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
