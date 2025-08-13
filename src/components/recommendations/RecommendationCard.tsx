// src/components/recommendations/RecommendationCard.tsx
import { Recommendation } from "@/lib/recommendations/types";
import clsx from "clsx";

const priorityStyles = {
    high: {
        border: "border-destructive",
        badgeBg: "bg-destructive/10",
        badgeText: "text-destructive",
    },
    medium: {
        border: "border-warning",
        badgeBg: "",
        badgeText: "text-warning",
    },
    low: {
        border: "border-success",
        badgeBg: "bg-success/10",
        badgeText: "text-success",
    },
};

export default function RecommendationCard({
    recommendation,
}: {
    recommendation: Recommendation;
}) {
    const priority = recommendation.priority as keyof typeof priorityStyles;
    const styles = priorityStyles[priority];

    return (
        <div
            className={clsx(
                "border-l-4 rounded-md shadow p-6 h-full bg-card",
                styles.border
            )}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-card-foreground">
                    {recommendation.title}
                </h3>
                <span
                    className={clsx(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        styles.badgeBg,
                        styles.badgeText
                    )}
                >
                    {recommendation.priority}
                </span>
            </div>

            <p className="text-muted-foreground mb-4">
                {recommendation.description}
            </p>

            <div className="space-y-3">
                <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                        Estimated Impact
                    </h4>
                    <p className="text-sm text-foreground">
                        {recommendation.estimatedImpact}
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                        Implementation Steps
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-foreground">
                        {recommendation.implementationSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
