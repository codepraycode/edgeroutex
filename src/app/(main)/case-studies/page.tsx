
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { getCaseStudies } from "@/lib/case-studies/data";

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Edge Computing Case Studies
            </h1>
            <p className="text-gray-600 mb-8">
                Explore real-world implementations of edge computing in
                transportation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                    <CaseStudyCard key={study.id} caseStudy={study} />
                ))}
            </div>
        </div>
    );
}
