import { shadows } from "@/theme/shadow";
import { buttonVariants } from "@/theme/theme";
import { ButtonKeys } from "@/types/buttonVariants";
import { Pressable, PressableProps, PressableStateCallbackType, View, ViewProps } from "react-native";

type ButtonProps = PressableProps & {
    children: (props: PressableStateCallbackType) => React.ReactNode;
    className?: string;
    shadow?: keyof typeof shadows;
}

type ButtonWrapperProps = ViewProps & {
    children: React.ReactNode;
    variant?: ButtonKeys;
    hovered?: boolean;
    pressed?: boolean;
    rounded?: string;
}

export default function Button({ children, className, shadow = "md", ...rest }: ButtonProps) {
    return (
        <Pressable
            className={`justify-center items-center ${className}`}
            style={shadows[shadow]}
            {...rest}
        >
            {({ hovered, pressed }) => children({ pressed, hovered })}
        </Pressable>
    );
}

export const ButtonWrapper = ({ children, variant = "default", hovered, pressed, rounded = "full", ...rest }: ButtonWrapperProps) => {

    const buttonStyles = buttonVariants[variant];

    return (
        <View
            className={`size-full justify-center items-center rounded-${rounded}`}
            {...rest}
            style={{
                backgroundColor: buttonStyles.default,
                ...(hovered ? { backgroundColor: buttonStyles.hovered } : {}),
                ...(pressed ? { backgroundColor: buttonStyles.pressed } : {}),
            }}
        >
            {children}
        </View>
    );
} 