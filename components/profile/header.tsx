import { useNavigation } from 'expo-router';
import { ArrowLeftIcon } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';

export default function Header({ scrollY }: { scrollY: any }) {
    const navigation = useNavigation();
    const width = useSharedValue(0);

    // Header background animation
    const containerStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            scrollY.value,
            [0, 300],
            ['#b9b7b7ff', '#ffffffee']
        ),
    }));

    // Title animation (center → left)
    const titleStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
            scrollY.value,
            [150, 300],
            [0, -((width.value / 2) - 65)], // move left
            'clamp'
        );

        return {
            transform: [{ translateX }],
        };
    });

    return (
        <Animated.View
            style={containerStyle}
            className="w-full h-24 absolute top-0 z-10 px-4 pb-3"
            onLayout={e => width.set(e.nativeEvent.layout.width)}
        >
            {/* Content row */}
            <View className="flex-row items-end justify-between h-full">
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <ArrowLeftIcon size={24} color="#000000" />
                </TouchableOpacity>
                <View className="w-6" />
            </View>
            <Animated.Text
                style={titleStyle}
                className="absolute bottom-3 left-0 right-0 text-center text-xl font-poppins-medium"
            >
                Profile
            </Animated.Text>
        </Animated.View>
    );
}
