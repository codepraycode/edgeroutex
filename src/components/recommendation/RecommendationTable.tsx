import { RecommendationTableProps } from "@/types/form.types";

export const RecommendationTable: React.FC<RecommendationTableProps> = ({
    data,
    className = "",
}) => {
    const getComplexityColor = (complexity: string) => {
        switch (complexity.toLowerCase()) {
            case "low":
                return "text-green-600 bg-green-50";
            case "medium":
                return "text-yellow-600 bg-yellow-50";
            case "high":
                return "text-red-600 bg-red-50";
            default:
                return "text-gray-600 bg-gray-50";
        }
    };

    return (
        <div
            className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
        >
            {/* Desktop Table */}
            <div className="hidden md:block">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-50 border-b border-gray-200">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Category
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Details
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Estimated budget
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Deployment complexity
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    {item.category}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                                    {item.details}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    {item.estimatedBudget}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <span
                                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(
                                            item.deploymentComplexity
                                        )}`}
                                    >
                                        {item.deploymentComplexity}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="block md:hidden">
                <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Recommendations
                    </h3>
                </div>
                <div className="divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <div key={index} className="p-4 space-y-3">
                            <div>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Category
                                </span>
                                <p className="text-sm font-medium text-gray-900 mt-1">
                                    {item.category}
                                </p>
                            </div>
                            <div>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Details
                                </span>
                                <p className="text-sm text-gray-700 mt-1">
                                    {item.details}
                                </p>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                        Budget
                                    </span>
                                    <p className="text-sm font-medium text-gray-900 mt-1">
                                        {item.estimatedBudget}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                        Complexity
                                    </span>
                                    <div className="mt-1">
                                        <span
                                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(
                                                item.deploymentComplexity
                                            )}`}
                                        >
                                            {item.deploymentComplexity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
