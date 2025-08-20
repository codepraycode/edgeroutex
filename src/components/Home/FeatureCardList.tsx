import { features } from "@/data/features";
import { ReactNode } from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export default function FeatureCards() {

    return (
        <section className="py-12 px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl ">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
        </section>
    );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon,
}) => {
    return (
        <article className="bg-neutral-50 p-6 rounded-lg h-48 flex-col flex">
            <header className="flex items-center gap-6">
                <h3 className="text-xl font-semibold text-primary-dark">
                    {title}
                </h3>
                {icon}
            </header>
            <p className="text-primary-dark font-semibold leading-relaxed mt-auto max-w-[90%]">
                {description}
            </p>
        </article>
    );
};
