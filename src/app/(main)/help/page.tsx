import CallToAction from "@/components/common/CallToAction";
import FeaturedArticlesSection from "@/components/Help/FeaturedArticles";
import HelpHeroSection from "@/components/Help/HeroSection";
import SupportPathSection from "@/components/Help/SupportPath";

export default function Help() {
    return (
        <>
            <HelpHeroSection />
            <SupportPathSection />
            <FeaturedArticlesSection />
            <CallToAction
                className="px-4 sm:px-6 lg:px-8"
                cta={{
                    label: "Contact us",
                    link: "#",
                }}
                description="Get in touch with us for details on additional services and personalized support tailored to your needs."
                title="Didn’t get an answer to your question?"
            />
        </>
    );
}
