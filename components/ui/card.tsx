import { shadows } from "@/theme/shadow";
import { View } from "react-native";

type CardProps = {
    children: React.ReactNode;
    className?: string;
    shadow?: keyof typeof shadows;
}

export default function Card({ children, shadow, className }: CardProps) {
    return (
        <View style={[shadows[shadow ?? "md"]]} className={`w-full h-full justify-center items-center bg-white rounded-full ${className}`}>
            {children}
        </View>
    );
};