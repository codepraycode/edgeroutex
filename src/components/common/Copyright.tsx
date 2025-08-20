import { Copyright } from "lucide-react";

const CopyrightNotice: React.FC = () => {
    return (
        <div className="flex items-center gap-1 pt-6">
            <Copyright size={20} className="text-neutral-900" />
            <p className="text-neutral-900 font-semibold">
                2025 EdgeRouteX. All rights reserved.
            </p>
        </div>
    );
};

export default CopyrightNotice;
