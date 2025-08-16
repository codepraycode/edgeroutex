"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

interface NavigationItem {
    id: string;
    label: string;
    icon: string;
    isActive?: boolean;
    link?: string;
}


const navigationItems: NavigationItem[] = [
    {
        id: "case-study",
        label: "Case study explorer",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/0MpYeTVsXd.svg",
        isActive: true,
        link: "/"
    },
    {
        id: "recommendation",
        label: "Recommendation engine",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/eDu9ntBJ9z.svg",
    },
    {
        id: "knowledge",
        label: "Knowledge base",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/5zVoNR1rVC.svg",
        link: "/knowledge-base"
    },
    {
        id: "help",
        label: "Help & support",
        icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/y5C5GrgGsn.svg",
        link: "/help",
    },
];

export default function SideBar() {
    return (
        <aside className="hidden lg:block lg:w-96 lg:fixed lg:h-screen lg:overflow-y-auto">
            <nav className="w-full h-full bg-neutral-100 p-10">
                <div className="mb-16">
                    <Logo />
                </div>
                <NavigationMenu />
            </nav>
        </aside>
    );
}


const NavigationMenu: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="space-y-4">
            <nav className="space-y-4">
                {navigationItems.map((item) => {
                    // Check if current path matches the item's link
                    const isActive =
                        pathname === item.link || pathname === `#${item.id}`;

                    return (
                        <Link
                            key={item.id}
                            href={item.link ?? `#${item.id}`}
                            data-active={isActive}
                            className={"flex items-center gap-3 px-4 py-4 rounded-lg transition-colors"}
                        >
                            <img src={item.icon} alt="" className="w-6 h-6" />
                            <span className="font-semibold">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </nav>
    );
};
