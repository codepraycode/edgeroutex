"use client";
import { FacebookOAuth, GoogleOAuth } from "@/components/auth/OAuth";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ZodError } from "zod";
import { signInSchema } from "@/lib/validations/authSchema";
import toast from "react-hot-toast";
import { notImplemented } from "@/lib/functions";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    type = "text",
    value,
    onChange,
    error,
    ...props
}) => (
    <div className="w-full">
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-700 placeholder-gray-500 ${
                error
                    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-200 focus:ring-blue-500 focus:border-transparent"
            }`}
            {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

interface FormData {
    email: string;
    password: string;
}
interface FormErrors {
    email?: string;
    password?: string;
    general?: string;
}

export default function SignInPage() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { signIn, loading, error, redirectAfterAuth, redirectToLink} = useAuth();

    const handleInputChange =
        (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [field]: e.target.value }));
            if (errors[field])
                setErrors((prev) => ({ ...prev, [field]: undefined }));
        };

    const validateForm = (): boolean => {
        try {
            signInSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const newErrors: FormErrors = {};
                error.issues.forEach((err) => {
                    if (err.path[0])
                        newErrors[err.path[0] as keyof FormErrors] =
                            err.message;
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        if (!validateForm()) return;
        setIsSubmitting(true);
        try {
            await signIn(formData.email, formData.password);
            // navigation can be handled here if you want: router.push('/dashboard')
            toast.success("Authenticated");
            redirectAfterAuth();
        } catch (err: any) {
            setErrors((prev) => ({
                ...prev,
                general: err?.message || "Failed to sign in",
            }));
            toast.success("Authentication failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="md:w-[50%] p-8 flex items-center justify-center max-w-full">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Sign in to your account to continue
                    </p>
                </div>

                {(errors.general || error) && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">
                            {errors.general || error}
                        </p>
                    </div>
                )}

                <form onSubmit={handleSignIn} className="space-y-4 mb-6">
                    <Input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        error={errors.email}
                        disabled={isSubmitting || loading}
                        autoComplete="email"
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange("password")}
                        error={errors.password}
                        disabled={isSubmitting || loading}
                        autoComplete="current-password"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting || loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        {isSubmitting || loading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Signing In...</span>
                            </div>
                        ) : (
                            "SIGN IN"
                        )}
                    </button>
                </form>

                <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm mb-4">
                        Or continue with
                    </p>
                    <div className="flex space-x-3 justify-center">
                        <GoogleOAuth />
                        <FacebookOAuth />
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-600 text-sm">
                        Don't have an account?{" "}
                        <a
                            href={redirectToLink("/signup")}
                            className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>

                <div className="text-center mt-4">
                    <a
                        href="/forgot-password"
                        onClick={notImplemented}
                        className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
}
