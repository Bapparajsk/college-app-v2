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
                primary: '#3B82F6',
                secondary: '#FBBF24',
                background: '#0F172A',
                surface: '#1E293B',
                textPrimary: '#F1F5F9',
                textSecondary: '#CBD5E1',
                border: '#334155',
                success: '#22C55E',
                error: '#EF4444',
                info: '#38BDF8',
                accent: '#FBBF24',
            },
        },
    },
    plugins: [],
}
