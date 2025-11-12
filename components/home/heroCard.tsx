import { shadows } from "@/theme/shadow";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarClockIcon } from "lucide-react-native";
import { ImageBackground, Text, View } from "react-native";
import Button, { ButtonWrapper } from "../ui/button";

import CircularProgress from "../ui/CircularProgress";


export default function HeroCard() {
    return (
        <View className="w-full h-[19rem]">
            <View
                className="size-full rounded-[3.5rem] overflow-hidden"
                style={shadows.md}
            >
                <View
                    key="profile-card-1"
                    className="relative w-full h-full rounded-3xl overflow-hidden"
                >
                    <View className="absolute inset-0">
                        <ImageBackground
                            source={{ uri: "https://img.freepik.com/premium-photo/math-tools-with-blank-blackground_198067-664047.jpg" }}
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
                        <View className="h-16 w-full px-2 pt-1 flex-row justify-between items-center">
                            <Button style={{
                                ...shadows.lg,
                                shadowColor: "#fff",
                            }} className="size-16" >
                                {({ hovered, pressed }) => (
                                    <ButtonWrapper hovered={hovered} pressed={pressed}>
                                        <CalendarClockIcon size={20} />
                                    </ButtonWrapper>
                                )}
                            </Button>
                            <View className="size-16 rounded-full bg-white/30 flex justify-center items-center">
                                <CircularProgress size={55} strokeWidth={4} progress={75} color="#7BDFF2" bgColor="#F7D6E0" duration={1000}>
                                    <Text className="font-inter-semibold text-white text-2lg">
                                        1/2
                                    </Text>
                                </CircularProgress>
                            </View>
                        </View>
                        <View className="w-full px-2 pt-1 flex-row justify-between items-center border border-white">

                        </View>
                        <View className="h-12 w-full px-4 flex-row justify-between items-center">
                            <Button style={{
                                ...shadows.md,
                                shadowColor: "#fff",
                            }} className="w-32 h-full" >
                                {({ hovered, pressed }) => (
                                    <ButtonWrapper hovered={hovered} pressed={pressed}>
                                        <Text className="font-poppins-semibold text-base">
                                            View Class
                                        </Text>
                                        <LinearGradient
                                            colors={[
                                                "rgba(0,0,0,0.0)",
                                                "rgba(0,0,0,0.05)",
                                                "rgba(0,0,0,0.1)",
                                            ]}
                                            className="absolute bottom-0 w-full h-full"
                                        />
                                    </ButtonWrapper>
                                )}
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}