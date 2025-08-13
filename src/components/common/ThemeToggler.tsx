"use client";

import { useEffect, useState } from "react";

export default function ThemeToggler() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const storedTheme = localStorage.getItem("theme");

        if (
            storedTheme === "dark" ||
            (!storedTheme &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            html.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const newTheme = isDark ? "light" : "dark";

        html.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-9 right-5 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
        >
            {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
