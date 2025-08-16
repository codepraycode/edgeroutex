import React from "react";
import FeatureCards from "./FeatureCardList";

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/NyniFrebED.png')`,
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex items-center justify-center px-4 lg:px-16 mt-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl lg:text-8xl font-bold text-neutral-50 mb-6 leading-tight">
                        Revolutionizing Transport with Edge Computing
                    </h1>
                    <p className="text-base lg:text-lg font-semibold text-neutral-50 mb-8 max-w-2xl">
                        Explore how edge computing is transforming the transport
                        industry, enhancing efficiency, safety, and
                        sustainability. Discover personalized advice, real-world
                        examples, and a comprehensive learning center.
                    </p>
                    <button className="bg-primary-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-blue/90 transition-colors">
                        Get started
                    </button>
                </div>
            </div>
            <div className="mt-20">
                <FeatureCards />
            </div>
        </section>
    );
};

export default HeroSection;
