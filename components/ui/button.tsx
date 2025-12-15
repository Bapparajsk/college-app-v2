import { shadows } from "@/theme/shadow";
import { buttonVariants } from "@/theme/theme";
import { ButtonKeys } from "@/types/buttonVariants";
import { useRouter } from "expo-router";
import { GestureResponderEvent, Pressable, PressableProps, PressableStateCallbackType, View, ViewProps } from "react-native";

type ButtonProps = PressableProps & {
    children: (props: PressableStateCallbackType) => React.ReactNode;
    className?: string;
    shadow?: keyof typeof shadows;
    href?: string;
}

type ButtonWrapperProps = ViewProps & {
    children: React.ReactNode;
    variant?: ButtonKeys;
    hovered?: boolean;
    pressed?: boolean;
    rounded?: string;
}

export default function Button({ children, className, shadow = "md", href, onPress, ...rest }: ButtonProps) {

    const router = useRouter();

    const handlePress = (e: GestureResponderEvent) => {
        if (href) {
            router.push(href as any);
        }
        if (onPress) {
            onPress(e);
        }
    }

    return (
        <Pressable
            className={`justify-center items-center ${className}`}
            style={shadows[shadow]}
            onPress={handlePress}
            {...rest}
        >
            {({ hovered, pressed }) => children({ pressed, hovered })}
        </Pressable>
    );
}

export const ButtonWrapper = ({ children, variant = "default", hovered, pressed, rounded = "full", className, style, ...rest }: ButtonWrapperProps) => {

    const buttonStyles = buttonVariants[variant];

    return (
        <View
            className={`size-full justify-center items-center overflow-hidden relative rounded-${rounded} ${className}`}
            style={[
                {
                    backgroundColor: buttonStyles.default,
                    ...(hovered ? { backgroundColor: buttonStyles.hovered } : {}),
                    ...(pressed ? { backgroundColor: buttonStyles.pressed } : {}),
                },
                style,
            ]}
            {...rest}
        >
            {children}
        </View>
    );
} 