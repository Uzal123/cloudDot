/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                mainText: "#012970",
                textLight:"#013289",
                lightGray: "#444444",
                mainButton: "#4154f1",
                lightBackground: "#f6f9ff"
            }
        },
    },
    plugins: [],
}