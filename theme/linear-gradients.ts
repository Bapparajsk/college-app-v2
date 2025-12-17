import { ProjectCardProps } from "@/components/ui/project-card";
import { LinearGradientProps } from "expo-linear-gradient";


export const gradient: Record<string, LinearGradientProps['colors']> = {
    HomePage: ["#ffffff", "#f8fbff", "#eaf9ff", "#d7f8ff", "#c4f8ff", "#c4f8ff", "#c4f8ff", "#c4f8ff", "#d7f8ff", "#eaf9ff", "#f8fbff", "#ffffff"],
    ProfilePage: ["#b9b7b7", "#bfbdbd", "#c5c3c3", "#cccaca", "#d2d0d0", "#d8d6d6", "#dddcdc", "#e3e2e2", "#eae9e9", "#f1f0f1", "#f8f8f8", "#ffffff"],
}


export const projectCardGradient: Record<ProjectCardProps["type"], LinearGradientProps['colors']> = {
    mobile: ['#ffffff', '#fdfdfe', '#fafcfe', '#f7fbfd', '#f4fafb', '#e6f6f8', '#d7f2f3', '#c8eeee', '#a8e6e6', '#86dedd', '#5cd6d4', '#02cecb'],
    web: ['#ffffff', '#fdfdfe', '#fafcfd', '#f6fafc', '#f3f9fa', '#e4f8f9', '#d5f8f4', '#c9f7ec', '#aff6de', '#99f4cc', '#89f1b5', '#80ed99'],
    iot: ['#ffffff', '#fdfdfe', '#fafcfd', '#f6fafc', '#f3f9fa', '#e6f5f6', '#d9f1f2', '#ccedec', '#b1e5e7', '#93dce4', '#72d3e3', '#48cae4'],
    ai: ['#ffffff', '#fdfcfe', '#fbf9fc', '#faf6fa', '#f9f3f7', '#f9e8f1', '#faddea', '#fbd2e1', '#febcd0', '#ffa5bd', '#ff8ea7', '#ff758f'],
    game: ['#ffffff', '#fdfdfe', '#fafcfd', '#f6fafc', '#f3f9fa', '#def2f6', '#c8ecf1', '#b1e5ec', '#7fd5ef', '#48c3f6', '#00aefd', '#0496ff'],
}