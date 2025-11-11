import { shadows } from "@/theme/shadow";
import { LinearGradient } from "expo-linear-gradient";
import { BarChartIcon, BookOpenIcon, GraduationCapIcon } from "lucide-react-native";
import { Image, ImageBackground, Text, View } from "react-native";
import Animated, { BounceIn, FadeInRight, SlideInLeft } from "react-native-reanimated";

export default function HeroCard() {
    return (
        <View className="w-full h-[16.5rem]">
            <View
                className="size-full rounded-3xl overflow-hidden"
                style={shadows.md}
            >
                <View
                    key="profile-card-1"
                    className="relative w-full h-full rounded-3xl overflow-hidden"
                >
                    <View className="absolute inset-0">
                        <ImageBackground
                            source={require("@/assets/images/home-theme-1.webp")}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    </View>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={[
                            "rgba(0,0,0,0.7)",
                            "rgba(0,0,0,0.6)",
                            "rgba(0,0,0,0.5)",
                            "rgba(0,0,0,0.4)",
                            "rgba(0,0,0,0.3)",
                            "rgba(0,0,0,0.3)"
                        ]}
                        className="absolute bottom-0 w-full h-full"
                    />

                    <View className="absolute inset-0 p-3 flex-1 justify-between">
                        <View
                            className="flex-row items-center gap-2 mb-2"
                        >
                            <View
                                // entering={ScaleIn.delay(300).springify()}
                                className="relative"
                            >
                                <View className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/80 shadow-lg shadow-black/30">
                                    <Image
                                        className="w-full h-full"
                                        source={{ uri: "https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-gamer-headphones_117038-5485.jpg" }}
                                    />
                                </View>
                            </View>
                            <View className="flex-1">
                                <Text
                                    className="font-poppins-bold text-2xl text-white mb-1"
                                >
                                    Bapparaj Sk
                                </Text>
                                <Text
                                    className="text-blue-100 font-poppins-medium text-base"
                                >
                                    Mack Your Future
                                </Text>
                            </View>
                        </View>

                        {/* Info Cards with Enhanced Animations */}
                        <View className="flex-col gap-3">
                            {/* Department Card */}
                            <View className="flex-row items-center gap-2 relative px-3">
                                <BookOpenIcon size={18} color="#60a5fa" />
                                <View className="flex-1 flex-row items-center gap-2">
                                    <Text className="text-gray-300 font-poppins-medium text-lg">
                                        Department:
                                    </Text>
                                    <Text className="text-white font-poppins-semibold text-lg">
                                        Computer Science
                                    </Text>
                                </View>
                                <View
                                    className="absolute left-0 h-full w-1 rounded-full bg-blue-400"
                                />
                            </View>

                            <View className="flex-row items-center gap-2 relative px-3">
                                <BarChartIcon size={18} color="#a78bfa" />
                                <View className="flex-1 flex-row items-center gap-2">
                                    <Text className="text-gray-300 font-poppins-medium text-lg">
                                        Semester:
                                    </Text>
                                    <Text className="text-white font-poppins-semibold text-lg">
                                        1st Semester
                                    </Text>
                                </View>
                                <View
                                    className="absolute left-0 h-full w-1 rounded-full bg-[#a78bfa]"
                                />
                            </View>
                            {/* Attendance Card with Progress */}
                            <Animated.View
                                entering={FadeInRight.delay(800).springify()}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-green-400"
                            >
                                <View className="flex-row items-center gap-3">
                                    <Animated.View
                                    // entering={RotateIn.delay(900).springify()}
                                    >
                                        <View className="w-10 h-10 bg-green-500/20 rounded-xl items-center justify-center">
                                            <GraduationCapIcon size={22} color="#34d399" />
                                        </View>
                                    </Animated.View>
                                    <View className="flex-1">
                                        <Text className="text-gray-300 font-poppins-medium text-sm">
                                            Attendance
                                        </Text>
                                        <View className="flex-row items-center gap-3">
                                            <Text className="text-white font-poppins-semibold text-lg">
                                                75%
                                            </Text>
                                            {/* Progress Bar */}
                                            <View className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                                <Animated.View
                                                    entering={SlideInLeft.delay(1000).springify()}
                                                    className="h-full bg-green-400 rounded-full"
                                                    style={{ width: '75%' }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Animated.View>
                        </View>
                    </View>

                    {/* Floating Elements */}
                    <Animated.View
                        entering={BounceIn.delay(1200).springify()}
                        className="absolute top-4 right-4 bg-red-500 px-3 py-1 rounded-full"
                    >
                        <Text className="text-white font-poppins-bold text-xs">ACTIVE</Text>
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}