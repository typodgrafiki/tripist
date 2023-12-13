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
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["bg-red-500"],
}
export default config
