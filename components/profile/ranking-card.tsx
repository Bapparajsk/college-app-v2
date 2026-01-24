import { shadows } from '@/theme/shadow';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { AnimatedButton } from '../ui/button';

type RankingCardProps = {
    linerGradientColors?: string[];
    title?: string;
    Icon?: React.ReactNode;
    value?: { primary: string; secondary: string };
    iconColor?: any;
    toGradient?: any;
    isAttendance?: boolean;
}

const RankingCard: FC<RankingCardProps> = ({ linerGradientColors, title, Icon, value, iconColor, toGradient, isAttendance }) => {

    const val1 = parseInt(value?.primary || "0");
    const val2 = parseInt(value?.secondary || "1");

    const getPercentage = () => {
        if (val2 === 0) return 0;
        return (val1 / val2) * 100;
    };

    const getRatingProgress = () => {
        return ((val2 - val1 + 1) / val2) * 100;
    };

    function calculateTopPercent() {
        return (val1 / val2) * 100;
    }

    return (
        <AnimatedButton scale={0.98} activeOpacity={1}>
            <View
                style={shadows.sm}
                className="w-full h-full rounded-[2rem] overflow-hidden"
            >
                <LinearGradient
                    colors={
                        (linerGradientColors as any) || [
                            "#fbefef",
                            "#fbf1f1",
                            "#fcf3f3",
                            "#fcf4f4",
                            "#fcf6f6",
                            "#fcf7f7",
                            "#fdf9f9",
                            "#fdfafa",
                            "#fdfbfc",
                            "#fefdfd",
                            "#fefefe",
                            "#ffffff",
                        ]
                    }
                    start={{
                        x: 0,
                        y: 1,
                    }}
                    end={{
                        x: 1,
                        y: 0,
                    }}
                    className={"w-full h-full"}
                >
                    <View className={"w-full h-full p-4 justify-between"}>
                        <View
                            className={"w-full h-auto flex-row justify-between items-center"}
                        >
                            <Text className={"text-2xl font-poppins-semibold"}>
                                {title || "Attendance"}
                            </Text>
                            <View
                                style={[shadows.md, { shadowColor: iconColor || "#4CB9F8" }]}
                                className={"size-12 rounded-full"}
                            >
                                <LinearGradient
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={[iconColor, iconColor, "#f7fcff"]}
                                    style={{ borderRadius: 99999 }}
                                    className={"w-full h-full items-center justify-center"}
                                >
                                    {Icon}
                                </LinearGradient>
                            </View>
                        </View>
                        <View className={"gap-2"}>
                            <View className={"w-full h-auto"}>
                                <Text className={"text-4xl font-poppins-semibold"}>
                                    {value?.primary}
                                    <Text className={"text-lg font-poppins text-stone-500"}>
                                        /{value?.secondary}
                                    </Text>
                                </Text>
                            </View>
                            <View className={"w-full h-auto gap-1 flex-row"}>
                                <LinearGradient
                                    className={"h-3.5 flex-1"}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={["#E0E0E0", "#E0E0E0"]}
                                    style={{ borderRadius: 99999 }}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        colors={[iconColor, toGradient]}
                                        className={"h-full"}
                                        style={{
                                            width: `${isAttendance ? getPercentage() : getRatingProgress()}%`,
                                            borderRadius: 99999,
                                        }}
                                    />
                                </LinearGradient>
                                {isAttendance && (
                                    <View>
                                        <Text
                                            className={
                                                "text-base text-stone-500 font-poppins-medium leading-none"
                                            }
                                        >
                                            {Math.round(getPercentage())}%
                                        </Text>
                                    </View>
                                )}
                            </View>
                            <View className={"flex-row gap-1"}>
                                <Text className={"text-sm text-stone-500 font-poppins-medium"}>
                                    {isAttendance
                                        ? "Keep going"
                                        : `Top ${Math.round(calculateTopPercent())}%`}
                                </Text>
                                <Image
                                    source={{
                                        uri: isAttendance
                                            ? "https://img.icons8.com/emoji/48/flexed-biceps.png"
                                            : "https://img.icons8.com/emoji/48/bullseye.png",
                                    }}
                                    className="size-5"
                                />
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </AnimatedButton>
    );
}

export default RankingCard;