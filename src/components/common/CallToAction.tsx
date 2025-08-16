import React from "react";

const CallToAction: React.FC = () => {
    return (
        <section className="py-16 px-4 lg:px-16">
            <div className="text-center lg:text-left">
                <header className="mb-8 max-w-5xl">
                    <h2 className="text-3xl lg:text-6xl font-semibold text-neutral-900 mb-4">
                        Ready to Transform Your Transport Operations?
                    </h2>
                    <p className="text-lg font-medium text-neutral-900 leading-relaxed max-w-[70%]">
                        Join us and start leveraging the power of edge computing
                        to drive innovation and achieve your transport goals.
                    </p>
                </header>
                <button className="bg-primary-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-blue/90 transition-colors">
                    Explore more case studies
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
