
import Exposition from "@/components/KnowledgeBase/Exposition";
import { KnowledgePageHeaderV2 } from "@/components/KnowledgeBase/PageHeader";
import RecommendedArticle from "@/components/KnowledgeBase/Recommendation";

export default function KnowledgeBaseArticlePage() {
    return (
        <>
            <KnowledgePageHeaderV2/>
            <Exposition/>
            <RecommendedArticle/>
        </>
    );
}
