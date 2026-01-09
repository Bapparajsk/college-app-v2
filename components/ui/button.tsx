import { shadows } from "@/theme/shadow";
import { buttonVariants } from "@/theme/theme";
import { ButtonKeys } from "@/types/buttonVariants";
import { useRouter } from "expo-router";
import { FC } from "react";
import { GestureResponderEvent, Pressable, PressableProps, PressableStateCallbackType, TouchableOpacity, View, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

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

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

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

export interface AnimatedButtonProps {
    className?: string;
    children: React.ReactNode;
    onPress?: () => void;
    disabled?: boolean;
    scale?: number; // Press scale factor (default: 0.95)
    duration?: number; // Animation duration in ms
    springConfig?: {
        damping?: number;
        stiffness?: number;
        mass?: number;
    };
    hoverScale?: number; // Optional hover effect for web
    activeOpacity?: number; // Opacity when pressed
}

export const AnimatedButton: FC<AnimatedButtonProps> = ({
    className,
    children,
    onPress,
    disabled = false,
    scale = 0.95,
    duration = 150,
    springConfig = { damping: 15, stiffness: 150, mass: 1 },
    hoverScale = 1.02,
    activeOpacity = 0.8,
}) => {
    const activePress = useSharedValue(false);
    const progress = useSharedValue(0);

    const onPressIn = () => {
        if (disabled) return;

        activePress.value = true;
        progress.value = withSpring(1, springConfig);
    };

    const onPressOut = () => {
        if (disabled) return;

        activePress.value = false;
        progress.value = withSpring(0, springConfig);
    };

    const handlePress = () => {
        if (disabled || !onPress) return;

        // Optional: Add haptic feedback here
        // if (Platform.OS !== 'web') {
        //   ReactNativeHapticFeedback.trigger('impactLight');
        // }

        onPress();
    };

    // SCMOD Animation Styles
    const animatedStyle = useAnimatedStyle(() => {
        // S - Scale: Smooth spring-based scaling
        const buttonScale = 1 - (1 - scale) * progress.value;

        // C - Color (Background/Surface): Can be animated if using interpolated colors
        // For now using opacity for surface feedback
        const surfaceOpacity = 1 - (1 - activeOpacity) * progress.value;

        // M - Motion/Translation: Subtle vertical movement
        const translateY = progress.value * 1; // 1px downward movement

        // O - Opacity: For disabled state
        const disabledOpacity = disabled ? 0.6 : 1;

        // D - Depth/Shadow: Simulate depth change
        const shadowOpacity = 0.3 - progress.value * 0.2;
        const shadowRadius = 5 - progress.value * 2;
        const shadowOffset = { width: 0, height: 2 - progress.value * 1 };

        return {
            // SCALE
            transform: [
                { scale: buttonScale },
                { translateY },
            ],

            // COLOR/SURFACE
            opacity: surfaceOpacity * disabledOpacity,

            // DEPTH/SHADOW (only on platforms that support it)
            shadowOpacity,
            shadowRadius,
            shadowOffset,

            // Additional visual feedback
            backgroundColor: disabled ? '#cccccc' : undefined,
        };
    });

    return (
        <AnimatedTouchableOpacity
            className={className}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={handlePress}
            disabled={disabled}
            activeOpacity={1}
            style={[animatedStyle]}
            accessible={true}
            accessibilityRole="button"
            accessibilityState={{ disabled }}
        >
            {children}
        </AnimatedTouchableOpacity>
    );
};

console.log(shadows.md);
