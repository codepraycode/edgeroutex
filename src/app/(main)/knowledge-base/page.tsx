import CallToAction from "@/components/common/CallToAction";
import ArticlesList from "@/components/KnowledgeBase/ArticleList";
import { KnowledgePageHeader } from "@/components/KnowledgeBase/PageHeader";

export default function KnowledgeBase() {
    return (
        <>
            <KnowledgePageHeader />
            <ArticlesList />
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
