import CallToAction from "@/components/common/CallToAction";
import ArticlesList from "@/components/KnowledgeBase/ArticleList";
import EdgeInsightsSection from "@/components/KnowledgeBase/EdgeInsights";

export default function KnowledgeBase() {
    return (
        <>
            <EdgeInsightsSection/>
            <ArticlesList/>
            <CallToAction
                cta={{
                    label: "Explore more case studies",
                    link: "#",
                }}
                description="Get in touch with us for details on additional services and personalized support tailored to your needs."
                title="Didn’t pique your curiosity?"
            />
        </>
    );
}
