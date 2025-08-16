import CallToAction from "@/components/common/CallToAction";
import Header from "@/components/common/Header";
import CaseStudiesSection from "@/components/Home/CaseStudiesSection";
// import FeatureCards from "@/components/Home/FeatureCardList";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />

            <CaseStudiesSection />
            <CallToAction
                cta={{
                    label: "Explore more case studies",
                    link: "#"
                }}
                description="Join us and start leveraging the power of edge computing
                        to drive innovation and achieve your transport goals."
                title="Ready to Transform Your Transport Operations?"
            />
        </>
    );
}
