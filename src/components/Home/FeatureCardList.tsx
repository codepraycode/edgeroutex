interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function FeatureCards() {
    const features = [
        {
            id: "1",
            title: "Real time processing",
            description:
                "Process information directly reducing delays, boosting responsiveness.",
            icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/q3SvWWXDmv.svg",
        },
        {
            id: "2",
            title: "Real time processing",
            description:
                "Process information directly reducing delays, boosting responsiveness.",
            icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/3rVwoj9w5A.svg",
        },
        {
            id: "3",
            title: "Real time processing",
            description:
                "Process information directly reducing delays, boosting responsiveness.",
            icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/rscd1RXq80.svg",
        },
    ];

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
                <img src={icon} alt="" className="w-5 h-5" />
            </header>
            <p className="text-primary-dark font-semibold leading-relaxed mt-auto max-w-[90%]">
                {description}
            </p>
        </article>
    );
};
