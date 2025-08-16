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
            <CallToAction />
        </>
    );
}
