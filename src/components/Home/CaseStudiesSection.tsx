import React from "react";
import SearchBar from "../ui/SearchBar";
import { caseStudies } from "@/data";


interface CaseStudyCardProps {
    title: string;
    date: string;
    description: string;
    image: string;
}

const CaseStudiesSection: React.FC = () => {
    return (
        <section className="py-12 px-4 lg:px-16">
            <div className="">
                <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
                    <h2 className="text-2xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                        Edge Computing Applications in Transport
                    </h2>
                    <SearchBar />
                </header>
                <CaseStudyGrid />
            </div>
        </section>
    );
};

export default CaseStudiesSection;


const CaseStudyGrid: React.FC = () => {
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} {...study} />
            ))}
        </div>
    );
};


const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    title,
    date,
    description,
    image,
}) => {
    return (
        <article className="space-y-4 my-5">
            <header className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-neutral-900 leading-tight">
                        {title}
                    </h3>
                    <time className="text-neutral-600">{date}</time>
                </div>
                <p className="text-neutral-900 leading-relaxed">
                    {description}
                </p>
            </header>
            <div className="aspect-[2/1] rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        </article>
    );
};