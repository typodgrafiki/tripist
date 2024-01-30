import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                top: "0 10px 40px rgba(0, 0, 0, 0.06)",
            },
            textColor: {
                muted: "#7d8490",
            },
        },
    },
    darkMode: ["class", '[data-theme="dark"]'],
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "bg-red-500",
        "bg-yellow-500",
        "bg-emerald-500",
        "bg-cyan-500",
        "bg-violet-400",
        "bg-purple-700",
        "bg-pink-600",
        "absolute",
        "right-0",
        "z-10",
        "mt-2",
        "w-56",
        "origin-top-right",
        "rounded-md",
        "bg-white",
        "shadow-lg",
        "ring-1",
        "ring-black",
        "ring-opacity-5",
        "focus:outline-none",
        "bg-opacity-70",
        "backdrop-blur-sm",
    ],
}
export default config
