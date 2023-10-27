/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                mainText: "#343b40",
                textLight: "#2e6d89",
                lightGray: "#2e6d89",
                mainButton: "#F4CE14",
                lightBackground: "#343b40"
            }
        },
    },
    plugins: [],
}