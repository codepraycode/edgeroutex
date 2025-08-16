import Image from "next/image";
import Link from "next/link";

const articles = [
    {
        id: 1,
        title: "Troubleshooting Common Edge Issues",
        description:
            "Experiencing slow response times or device sync errors? You're not alone. From network latency to hardware misconfigurations, even small glitches can impact your edge computing performance. In this guide, we break down the most frequent issues users face — and the quick fixes that can get you back on track in minutes...",
        link: "/knowledge-base/articleItem",
        image: null, // No image for this article
    },
    {
        id: 2,
        title: "Troubleshooting Common Edge Issues",
        description:
            "Experiencing slow response times or device sync errors? You're not alone. From network latency to hardware misconfigurations, even small glitches can impact your edge computing performance. In this guide, we break down the most frequent issues users face — and the quick fixes that can get you back on track in minutes...",
        link: "/knowledge-base/articleItem",
        image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/NyniFrebED.png",
    },
    {
        id: 3,
        title: "Troubleshooting Common Edge Issues",
        description:
            "Experiencing slow response times or device sync errors? You're not alone. From network latency to hardware misconfigurations, even small glitches can impact your edge computing performance. In this guide, we break down the most frequent issues users face — and the quick fixes that can get you back on track in minutes...",
        link: "/knowledge-base/articleItem",
        image: null, // No image for this article
    },
    {
        id: 4,
        title: "Troubleshooting Common Edge Issues",
        description:
            "Experiencing slow response times or device sync errors? You're not alone. From network latency to hardware misconfigurations, even small glitches can impact your edge computing performance. In this guide, we break down the most frequent issues users face — and the quick fixes that can get you back on track in minutes...",
        link: "/knowledge-base/articleItem",
        image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/NyniFrebED.png",
    },
    {
        id: 5,
        title: "Troubleshooting Common Edge Issues",
        description:
            "Experiencing slow response times or device sync errors? You're not alone. From network latency to hardware misconfigurations, even small glitches can impact your edge computing performance. In this guide, we break down the most frequent issues users face — and the quick fixes that can get you back on track in minutes...",
        link: "/knowledge-base/articleItem",
        image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/NyniFrebED.png",
    },
];

export default function ArticlesList() {

    return (
        <div className="py-8 ">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {articles.map((article) => (
                        <ArticleItem key={article.id}  article={article}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

type Article = {[k:string]: string | number | null};

export function ArticleItem({article}:{article: Article}) {
    return (
        <article
            
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
        >
            <div
                className={`${
                    article.image
                        ? "flex flex-col sm:flex-row sm:items-stretch"
                        : ""
                }`}
            >
                {/* Article Content */}
                <div
                    className={`p-6 flex flex-col justify-between ${
                        article.image ? "sm:flex-1 sm:min-w-0" : ""
                    }`}
                >
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                            {article.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 text-sm">
                            {article.description}
                        </p>
                    </div>
                    <Link
                        href={article.link as string}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 w-fit text-sm"
                    >
                        Read more
                        <svg
                            className="ml-1 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
                {/* Article Image - Only render if image exists */}
                {article.image && (
                    <div className="sm:w-48 sm:flex-shrink-0">
                        <Image
                            src={article.image as string}
                            alt={article.title as string}
                            className="w-full h-32 sm:h-full sm:min-h-[140px] object-cover sm:rounded-r-lg"
                            fill
                        />
                    </div>
                )}
            </div>
        </article>
    );
}
