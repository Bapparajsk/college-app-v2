/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                // Poppins
                "poppins-thin": ["PoppinsThin", "sans-serif"],
                "poppins-light": ["PoppinsLight", "sans-serif"],
                "poppins": ["PoppinsRegular", "sans-serif"],
                "poppins-medium": ["PoppinsMedium", "sans-serif"],
                "poppins-semibold": ["PoppinsSemiBold", "sans-serif"],
                "poppins-bold": ["PoppinsBold", "sans-serif"],
                "poppins-extrabold": ["PoppinsExtraBold", "sans-serif"],

                // Inter
                "inter-thin": ["InterThin", "sans-serif"],
                "inter-light": ["InterLight", "sans-serif"],
                "inter": ["InterRegular", "sans-serif"],
                "inter-medium": ["InterMedium", "sans-serif"],
                "inter-semibold": ["InterSemiBold", "sans-serif"],
                "inter-bold": ["InterBold", "sans-serif"],
                "inter-extrabold": ["InterExtraBold", "sans-serif"],
            },
            colors: {
                default: '#3f3f46',
                primary: "#006FEE",
                secondary: "#9353d3",
                success: "#17c964",
                warning: "#f5a524",
                danger: "#f31260",
            },
        },
    },
    plugins: [],
}
