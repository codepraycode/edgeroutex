
export default async function AdminDashboard() {
    // const session = await getServerSession()

    const cards = [
        {
            title: "Case Studies",
            description: "Manage the case study library",
            href: "/admin/case-studies",
            action: "Manage",
        },
        {
            title: "Recommendation Logic",
            description: "Configure the recommendation engine rules",
            href: "/admin/recommendation-rules",
            action: "Configure",
        },
        {
            title: "User Analytics",
            description: "View usage patterns and feedback",
            href: "/admin/analytics",
            action: "View Reports",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-foreground mb-8">
                Admin Dashboard
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <div
                        key={card.href}
                        className="rounded-lg border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-xl font-semibold text-foreground mb-3">
                            {card.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            {card.description}
                        </p>
                        <a
                            href={card.href}
                            className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            {card.action}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
