import { ButtonVariants } from "@/types/buttonVariants";

export const colors = {
    default: '#EFF7F6',
    primary: "#006FEE",
    secondary: "#9353d3",
    success: "#17c964",
    warning: "#f5a524",
    danger: "#f31260",
    white: "#fff",
    black: "#000",
};

export const buttonVariants: ButtonVariants = {
    default: {
        default: colors.default,
        hovered: '#EEEEEE',
        pressed: '#E6E5E5',
        text: colors.black,
    },
    primary: {
        default: colors.primary,
        hovered: '#0056cc',
        pressed: '#004bb5',
        text: colors.white,
    },
    secondary: {
        default: colors.secondary,
        hovered: '#7a39b5',
        pressed: '#6a2ca3',
        text: colors.white,
    },
    success: {
        default: colors.success,
        hovered: '#13a454',
        pressed: '#0e8f3e',
        text: colors.black,
    },
    error: {
        default: colors.danger,
        hovered: '#e02550',
        pressed: '#c21840',
        text: colors.black,
    },
    warning: {
        default: colors.warning,
        hovered: '#d18f1f',
        pressed: '#b7771a',
        text: colors.black,
    },
}