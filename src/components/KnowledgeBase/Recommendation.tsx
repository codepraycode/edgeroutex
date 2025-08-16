import Link from "next/link";
import { ArticleItem } from "./ArticleList";

export default function RecommendedArticle() {
    const article = {
        title: "Troubleshooting Common Edge Issues",
        description:
            "Experiencing slow response times or device sync errors? You're not alone. From network latency to hardware misconfigurations, even small glitches can impact your edge computing performance. In this guide, we break down the most frequent issues users face — and the quick fixes that can get you back on track in minutes...",
        link: "/troubleshooting/common-edge-issues",
        image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/NyniFrebED.png",
    };

    return (
        <section className="">
            <div className="max-w-4xl">
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Recommended article for you!
                </h2>

                {/* Article Card */}
                <ArticleItem article={article}/>
            </div>
        </section>
    );
}
