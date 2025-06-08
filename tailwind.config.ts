import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}", // обязательно указать .ts и .tsx
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-rubik)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
