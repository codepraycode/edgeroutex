
import Link from "next/link";
import React from "react";


type Props = {
    title: string;
    description:string;
    cta: {
        link: string;
        label:string;
    }
}

const CallToAction = ({
    title,
    cta,
    description
}: Props) => {
    return (
        <section className="py-16">
            <div className="text-center lg:text-left">
                <header className="mb-8 max-w-5xl">
                    <h2 className="text-3xl lg:text-6xl font-semibold text-neutral-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg font-medium text-neutral-900 leading-relaxed lg:max-w-[70%] mx-auto lg:mx-0">
                        {description}
                    </p>
                </header>
                <Link href={cta.link} className="bg-primary-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-blue/90 transition-colors">
                    {cta.label}
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
