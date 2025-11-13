import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function CategoriesCard() {

    const scale = useSharedValue(1);

    const buttonScaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.98, { damping: 10, stiffness: 200 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { damping: 10, stiffness: 200 });
    };

    return (
        <Link href={"/chat"} asChild>
            <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
                {({ pressed }) => (
                    <Animated.View className="w-52 h-52"
                        style={[buttonScaleStyle]}
                    >
                        <View className="size-full">
                            <LinearGradient
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                colors={["#f7d6e0", "#f7cedc", "#f6c5d9", "#f4bdd6", "#f2b5d4"]}
                                className="size-full rounded-3xl justify-center items-center overflow-hidden"
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 3.65,

                                    elevation: 5,
                                }}
                            >
                                <Text>
                                    slfj
                                </Text>
                            </LinearGradient>
                        </View>
                    </Animated.View>
                )}

            </Pressable>
        </Link>
    )
}