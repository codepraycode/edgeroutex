import React from "react";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
                <div className="absolute w-5 h-5 bg-primary-gray rounded-full top-0 left-0"></div>
                <div className="absolute w-5 h-5 bg-primary-dark rounded-full top-0 right-0"></div>
                <div className="absolute w-5 h-5 bg-primary-blue rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <span className="text-xl font-bold text-neutral-900">
                EdgeRouteX
            </span>
        </div>
    );
};

export default Logo;
