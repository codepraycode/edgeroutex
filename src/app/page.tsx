import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Edge Computing Advisory (PoC)
            </h1>
            <p className="text-gray-600 mb-8 text-center max-w-xl">
                Simulate how edge computing fits your transport use case.
            </p>
            <Link
                href="/simulate"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
            >
                Start Simulation
            </Link>
        </main>
    );
}
