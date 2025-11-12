import { Link } from "expo-router";
import { SearchIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from "react-native-reanimated";
import Button from "../ui/button";

export default function SearchButton() {
    const texts = [
        "Search for courses, topics, or keywords...",
        "Find your next favorite subject...",
        "Explore new learning opportunities...",
        "Discover courses tailored for you...",
        "Uncover topics that spark your interest..."
    ];

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const scale = useSharedValue(1);

    // Typewriter effect
    useEffect(() => {
        const currentFullText = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing phase
                if (charIndex < currentFullText.length) {
                    setCurrentText(currentFullText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Finished typing, wait then start deleting
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                // Deleting phase
                if (charIndex > 0) {
                    setCurrentText(currentFullText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 40 : 60); // Faster deletion than typing

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex]);

    const buttonScaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    // Blinking cursor animation
    const cursorOpacity = useSharedValue(1);

    useEffect(() => {
        const interval = setInterval(() => {
            cursorOpacity.value = withTiming(cursorOpacity.value === 1 ? 0 : 1, {
                duration: 500,
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const cursorStyle = useAnimatedStyle(() => {
        return {
            opacity: cursorOpacity.value,
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.98, { damping: 10, stiffness: 200 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { damping: 10, stiffness: 200 });
    };

    return (
        <View className="w-full h-20 py-2 items-center justify-center">
            <Link href={"/search"} asChild>
                <Button
                    className="size-full rounded-full "
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    {({ pressed }) => {
                        return (
                            <Animated.View
                                className="size-full rounded-full bg-[#EFEFEF] border border-gray-300" 
                                style={[
                                    {
                                        backgroundColor: pressed ? '#e1dfdf' : '#EFEFEF',
                                    },
                                    buttonScaleStyle
                                ]}
                            >
                                <View className="h-full flex-row gap-2 items-center justify-start px-4">
                                    <SearchIcon size={23} color="#6B7280" />
                                    <View className="w-full h-6 overflow-hidden justify-center">
                                        <View className="flex-row items-center">
                                            <Text
                                                className="font-poppins-medium text-base text-gray-500"
                                                numberOfLines={1}
                                            >
                                                {currentText}
                                            </Text>
                                            <Animated.View
                                                style={cursorStyle}
                                                className="w-1 h-6 bg-gray-500 ml-0.5 rounded-full"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </Animated.View>
                        );
                    }}
                </Button>
            </Link>
        </View>
    );
}