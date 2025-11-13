import { shadows } from "@/theme/shadow";
import { LinearGradient } from "expo-linear-gradient";
import { AtomIcon, CalendarClockIcon, ChevronRightIcon, SquareRadicalIcon } from "lucide-react-native";
import { ImageBackground, Pressable, Text, View } from "react-native";
import Button, { ButtonWrapper } from "../ui/button";

import { Link } from "expo-router";
import CircularProgress from "../ui/CircularProgress";


export default function HeroCard() {
    return (
        <View className="w-full h-[19rem]">
            <View
                className="size-full rounded-[3.5rem] overflow-hidden"
                style={shadows.lg}
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
                                        <CalendarClockIcon size={28} />
                                    </ButtonWrapper>
                                )}
                            </Button>
                            <View className="size-16 rounded-full bg-white/30 flex justify-center items-center">
                                <CircularProgress size={55} strokeWidth={4} progress={60} color="#7bdff2" bgColor="#f2b5d4" duration={1000}>
                                    <Text className="font-inter-semibold text-white text-2lg">
                                        2/6
                                    </Text>
                                </CircularProgress>
                            </View>
                        </View>
                        <View className="w-full justify-center items-center">
                            <ClassCard icon={<SquareRadicalIcon size={26} color={"#7bdff2"} />} color="#7bdff2" isOngoing />
                            <ClassCard subject="Applied Physics - 1" time="10:00 AM - 11:30 AM" icon={<AtomIcon size={26} color={"#F1BA00"} />} />
                        </View>
                        <View className="h-10 w-full px-4 flex-row justify-between items-center">
                            <Button style={{
                                ...shadows.md,
                                shadowColor: "#fff",
                            }} className="h-full w-28" >
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


function ClassCard({
    subject = "Mathematics",
    time = "10:00 AM - 11:30 AM",
    icon = <SquareRadicalIcon size={26} />,
    color = "#F1BA00",
    isOngoing = false,
}) {
    return (
        <View className="h-20 w-full py-1 px-2">
            <Link href={"/chat"} className="size-full" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <View
                            className="w-full h-full flex-row rounded-full bg-white/20 justify-between items-center px-2 border border-gray-500 overflow-hidden"
                            style={{ opacity: pressed ? 0.7 : 1 }}
                        >
                            <View className="flex-row items-center gap-3">
                                <View
                                    style={{
                                        backgroundColor: color + "50",
                                        borderColor: color,
                                    }}
                                    className="size-14 border rounded-full justify-center items-center">
                                    {icon}
                                </View>
                                <View>
                                    <Text className="font-poppins-semibold text-white text-lg">
                                        {subject} <View
                                            style={{
                                                backgroundColor: isOngoing ? "#469e6f" : "#F1BA00CC",
                                                borderColor: isOngoing ? "#00D866" : "#F1BA00",
                                            }} className="border rounded-full px-2"><Text className="text-sm font-poppins text-white">{isOngoing ? "Started" : "Upcoming"}</Text></View>
                                    </Text>
                                    <Text className="font-poppins-medium text-white text-sm">
                                        {time}
                                    </Text>
                                </View>
                            </View>
                            <Button className="size-10 rounded-full justify-center items-center" >
                                {({ hovered, pressed }) => (
                                    <ButtonWrapper hovered={hovered} pressed={pressed}>
                                        <ChevronRightIcon size={24} />
                                    </ButtonWrapper>
                                )}
                            </Button>
                        </View>
                    )}
                </Pressable>
            </Link>
        </View>
    );
}