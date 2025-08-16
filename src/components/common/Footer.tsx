import React from "react";
import Logo from "../common/Logo";
import Copyright from "./Copyright";


interface FooterSection {
    title: string
    links: string[]
}

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-neutral-200 py-12 px-4 lg:px-16">
            <section className="">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-1">
                        <Logo />
                        <p className="mt-6 text-neutral-700 font-medium leading-relaxed">
                            Explore real-world examples of how edge computing is
                            transforming the transport industry, enhancing
                            sustainability.
                        </p>
                    </div>
                    <div className="lg:col-span-3">
                        <FooterLinks />
                    </div>
                </div>
                <Copyright />
            </section>
        </footer>
    );
};

export default Footer;


const FooterLinks: React.FC = () => {
    const footerSections: FooterSection[] = [
        {
            title: "Support",
            links: ["Contact support", "Feedback"],
        },
        {
            title: "Resources",
            links: ["Knowledge base", "Industry reports"],
        },
        {
            title: "Product",
            links: ["Recommendation engine", "Case studies", "Simulation tool"],
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
                <div key={section.title}>
                    <h3 className="font-semibold text-xl text-neutral-900 mb-6">
                        {section.title}
                    </h3>
                    <nav className="space-y-3">
                        {section.links.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="block text-neutral-700 font-medium hover:text-neutral-900 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            ))}
        </div>
    );
};