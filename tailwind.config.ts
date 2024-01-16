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
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "bg-red-500",
        "bg-yellow-500",
        "bg-emerald-500",
        "bg-cyan-500",
        "bg-violet-400",
        "bg-purple-700",
        "bg-pink-600",
    ],
}
export default config
