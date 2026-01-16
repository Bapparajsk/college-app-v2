import React from "react";
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

export default function Header({ scrollY }: { scrollY: any }) {
    const width = useSharedValue(0);

    // Header background animation
    const containerStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            scrollY.value,
            [0, 300],
            ["#b9b7b7ff", "#ffffffee"],
        ),
    }));

    // Title animation (center → left)
    const titleStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
            scrollY.value,
            [150, 300],
            [0, -(width.value / 2 - 65)], // move left
            "clamp",
        );

        return {
            transform: [{ translateX }],
        };
    });

    return (
        <Animated.View
            style={containerStyle}
            className="w-full h-24 absolute top-0 z-10 px-4 "
            onLayout={(e) => width.set(e.nativeEvent.layout.width)}
        >
            <Animated.Text
                style={titleStyle}
                className="absolute bottom-3 left-0 right-0 text-center text-2xl font-poppins-medium"
            >
                Profile
            </Animated.Text>
        </Animated.View>
    );
}
