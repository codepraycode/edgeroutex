import { ArrowRight } from "lucide-react";

interface NextButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export const NextButton: React.FC<NextButtonProps> = ({
    onClick,
    disabled = false,
    loading = false,
    children = "NEXT",
    className = "",
    fullWidth = false,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        bg-blue-500 hover:bg-blue-600 active:bg-blue-700
        text-white font-semibold text-sm
        px-6 py-3 rounded-lg
        flex items-center justify-center gap-2
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        disabled:bg-gray-400 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
        >
            {loading ? (
                <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    LOADING...
                </>
            ) : (
                <>
                    {children}
                    <ArrowRight className="w-4 h-4" />
                </>
            )}
        </button>
    );
};
