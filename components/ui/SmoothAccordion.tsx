// src/components/BetterSmoothAccordion.tsx
import { ChevronDown } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import {
    LayoutChangeEvent,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated, {
    Easing,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

interface BetterSmoothAccordionProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onPress?: () => void;
    duration?: number;
}

const BetterSmoothAccordion: React.FC<BetterSmoothAccordionProps> = ({
    title,
    children,
    isOpen: externalIsOpen,
    onPress: externalOnPress,
    duration = 300,
}) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

    const progress = useSharedValue(isOpen ? 1 : 0);
    const measured = useRef(false);

    const handlePress = () => {
        if (externalOnPress) {
            externalOnPress();
        } else {
            setInternalIsOpen(!isOpen);
        }
    };

    const handleContentLayout = (event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        if (height > 0 && !measured.current) {
            measured.current = true;
            setContentHeight(height);
        }
    };

    React.useEffect(() => {
        progress.value = withTiming(isOpen ? 1 : 0, {
            duration,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        });
    }, [isOpen, duration]);

    const animatedHeightStyle = useAnimatedStyle(() => {
        if (contentHeight === 0) {
            return { height: 0, opacity: 0 };
        }

        return {
            height: interpolate(progress.value, [0, 1], [0, contentHeight]),
            opacity: progress.value,
        };
    });

    const animatedChevronStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotate: `${progress.value * 180}deg`
            }],
        };
    });

    return (
        <View className="mb-3 rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.7}
                className="flex-row items-center justify-between p-5"
            >
                <Text className="flex-1 text-lg font-bold text-gray-900">
                    {title}
                </Text>
                <Animated.View style={animatedChevronStyle}>
                    <ChevronDown size={24} color="#374151" />
                </Animated.View>
            </TouchableOpacity>

            {/* Animated Content Area */}
            <Animated.View
                style={[animatedHeightStyle, { overflow: 'hidden' }]}
            >
                {/* Hidden view to measure content height */}
                <View
                    onLayout={handleContentLayout}
                    style={{ position: 'absolute', opacity: 0 }}
                >
                    <View className="px-5 pb-5">
                        {children}
                    </View>
                </View>

                {/* Visible content */}
                <View className="px-5 pb-5">
                    {children}
                </View>
            </Animated.View>
        </View>
    );
};

export default BetterSmoothAccordion;