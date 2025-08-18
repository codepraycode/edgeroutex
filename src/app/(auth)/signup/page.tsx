"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";
import { ZodError } from "zod";

// Input component props interface
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

// Form data interface
interface FormData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
}

// Zod schema for signup validation
const signUpSchema = z
    .object({
        fullName: z.string().min(2, "Full name is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export default function SignUpPage() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { signUp, signInWithProvider, loading, error } = useAuth();

    const handleInputChange =
        (field: keyof FormData) =>
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            setFormData((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));

            if (errors[field]) {
                setErrors((prev) => ({
                    ...prev,
                    [field]: undefined,
                }));
            }
        };

    const validateForm = (): boolean => {
        try {
            signUpSchema.parse(formData);
            setErrors({});
            return true;
        } catch (err) {
            if (err instanceof ZodError) {
                const newErrors: FormErrors = {};
                err.issues.forEach((issue) => {
                    if (issue.path[0]) {
                        newErrors[issue.path[0] as keyof FormErrors] =
                            issue.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSignUp = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            await signUp(
                formData.email,
                formData.password,
                { full_name: formData.fullName } // ✅ pass profile fields to Supabase user metadata
                // optionally: , { emailRedirectTo: `${window.location.origin}/auth/callback` }
            );
        } catch (err) {
            console.error("Sign up error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="md:w-[50%] p-8 flex items-center justify-center max-w-full ">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Create Account
                    </h2>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSignUp} className="space-y-4 mb-6">
                    <Input
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleInputChange("fullName")}
                        error={errors.fullName}
                        disabled={isSubmitting || loading}
                    />

                    <Input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        error={errors.email}
                        disabled={isSubmitting || loading}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange("password")}
                        error={errors.password}
                        disabled={isSubmitting || loading}
                    />

                    <Input
                        type="password"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange("confirmPassword")}
                        error={errors.confirmPassword}
                        disabled={isSubmitting || loading}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting || loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        {isSubmitting || loading
                            ? "Creating Account..."
                            : "SIGN UP"}
                    </button>
                </form>

                <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm mb-4">
                        Or continue with
                    </p>

                    <div className="flex space-x-3 justify-center">
                        <button
                            onClick={() => signInWithProvider("google")}
                            type="button"
                            className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                        >
                            Google
                        </button>

                        <button
                            onClick={() => signInWithProvider("facebook")}
                            type="button"
                            className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                        >
                            Facebook
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{" "}
                        <a
                            href="/signin"
                            className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
