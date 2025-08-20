import React from "react";

export const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
}) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
        {children}
    </div>
);
