"use client";

import { FacebookOAuth, GoogleOAuth } from "@/components/auth/OAuth";
import { useState } from "react";

// Input component props interface
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Placeholder Input component - replace with your actual Input component
const Input: React.FC<InputProps> = ({
    placeholder,
    type = "text",
    value,
    onChange,
    ...props
}) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500"
        {...props}
    />
);

// Form data interface
interface FormData {
    email: string;
    password: string;
}

export default function SignInPage() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleInputChange =
        (field: keyof FormData) =>
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            setFormData((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));
        };

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Handle signup logic here
        console.log("Sign up data:", formData);
    };

    

    

    return (
        <div className="md:w-[50%] p-8 flex items-center justify-center max-w-full ">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome Back
                    </h2>
                </div>

                <form onSubmit={handleSignUp} className="space-y-4 mb-6">

                    <Input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange("password")}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        SIGN IN
                    </button>
                </form>

                <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm mb-4">
                        Or continue with
                    </p>

                    <div className="flex space-x-3 justify-center">
                        <GoogleOAuth/>
                        <FacebookOAuth/>
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
