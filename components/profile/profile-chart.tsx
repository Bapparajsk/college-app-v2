import {shadows} from "@/theme/shadow";
import {formatDay, getMonthAndYear} from "@/units/date";
import {LinearGradient} from "expo-linear-gradient";
import {CalendarIcon, ChartNoAxesCombinedIcon, UserRoundCheckIcon,} from "lucide-react-native";
import React, {useMemo} from "react";
import {Text, View} from "react-native";
import {RadarChart} from "react-native-gifted-charts";
import {AnimatedButton} from "../ui/button";

export default function ProfileChart() {
    const {month, year} = useMemo(() => getMonthAndYear(), []);

    return (
        <View className="w-full h-auto mt-5">
            <View className="w-full flex-row justify-between items-center mb-3 px-1">
                <Text className="text-3xl font-poppins-semibold">OverView</Text>
                <View className="flex-row gap-2 overflow-hidden rounded-full bg-gray-200 px-4 py-2 items-center">
                    <CalendarIcon size={16}/>
                    <Text className="text-base font-poppins leading-none">
                        {formatDay(month)} {year}
                    </Text>
                </View>
            </View>
            <RadarChart
                data={[70, 40, 90, 80, 30, 60]}
                labels={[
                    "English",
                    "Maths",
                    "Physics",
                    "Chemistry",
                    "Workshop",
                    "Graphics",
                ]}
                // isAnimated={true}
                animationDuration={700}
                chartSize={380}
                startAngle={3}
                maxValue={110}
                labelsPositionOffset={5}
                dataLabelsPositionOffset={5}
                isClockWise={true}
                noOfSections={5}
                gridConfig={{
                    gradientColor: "#F5F5F5A0",
                    gradientOpacity: 0.3,
                    fill: "#F5F5F5A0",
                    stroke: "#E0E0E0",
                    strokeWidth: 1,
                }}
                polygonConfig={{
                    fill: "rgba(55, 239, 225, 0.3)",
                    stroke: "#6AECE1",
                    strokeWidth: 1,
                    showDataValuesAsLabels: true,
                }}
                asterLinesConfig={{strokeWidth: 0}}
                labelConfig={{
                    fontSize: 14,
                    fontWeight: "500",
                    fontFamily: "poppins-medium",
                    stroke: "#333333",
                }}
                dataLabelsConfig={{
                    fontSize: 12,
                    fontWeight: "500",
                    fontFamily: "poppins-medium",
                    stroke: "#555555",
                }}
            />
            <View className="w-full h-auto mt-5 flex-row">
                <View className="w-1/2 h-44 pr-1">
                    <StatusCard
                        Icon={<UserRoundCheckIcon size={20} color={"#fff"}/>}
                        title={"Attendance"}
                        value={{primary: "290", secondary: "300 Days"}}
                        iconColor={"#4CB9F8"}
                        toGradient={"#9cd3f3"}
                        isAttendance={true}
                    />
                </View>
                <View className="w-1/2 h-44 pl-1">
                    <StatusCard
                        Icon={<ChartNoAxesCombinedIcon size={20} color={"#fff"}/>}
                        title={"Ranking"}
                        value={{primary: "3", secondary: "150 Students"}}
                        iconColor={"#7C60DC"}
                        toGradient={"#a393de"}

                    />
                </View>
            </View>
        </View>
    );
}

function StatusCard({
                        linerGradiantColors,
                        title,
                        Icon,
                        value,
                        iconColor,
                        toGradient,
                        isAttendance,
                    }: {
    linerGradiantColors?: string[];
    title?: string;
    Icon?: React.ReactNode;
    value?: { primary: string; secondary: string };
    iconColor?: any;
    toGradient?: any;
    isAttendance?: boolean;
}) {

    const val1 = parseInt(value?.primary || "0");
    const val2 = parseInt(value?.secondary || "1");

    const getPercentage = () => {
        if (val2 === 0) return 0;
        return (val1 / val2) * 100;
    }

    const getRatingProgress = () => {
        return ((val2 - val1 + 1) / val2) * 100;
    }

    function calculateTopPercent() {
        return (val1 / val2) * 100;
    }

    return (
        <AnimatedButton scale={0.99} activeOpacity={1}>
            <View
                style={shadows.sm}
                className="w-full h-full rounded-[2rem] overflow-hidden"
            >
                <LinearGradient
                    colors={
                        (linerGradiantColors as any) || [
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
                                style={[shadows.md, {shadowColor: iconColor || "#4CB9F8"}]}
                                className={
                                    "size-12 rounded-full"
                                }
                            >
                                <LinearGradient
                                    start={{x: 0, y: 1,}}
                                    end={{x: 1, y: 0,}}
                                    colors={[iconColor, iconColor, "#f7fcff"]}
                                    style={{borderRadius: 99999}}
                                    className={"w-full h-full items-center justify-center"}>
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
                                    start={{x: 0, y: 1,}}
                                    end={{x: 1, y: 0,}}
                                    colors={["#E0E0E0", "#E0E0E0"]}
                                    style={{borderRadius: 99999}}
                                >
                                    <LinearGradient
                                        start={{x: 0, y: 1,}}
                                        end={{x: 1, y: 0,}}
                                        colors={[iconColor, toGradient]}
                                        className={"h-full"}
                                        style={{
                                            width: `${isAttendance ? getPercentage() : getRatingProgress()}%`,
                                            borderRadius: 99999,
                                        }}
                                    />
                                </LinearGradient>
                                {isAttendance && (<View>
                                    <Text className={"text-base text-stone-500 font-poppins-medium leading-none"}>
                                        {Math.ceil(getPercentage())}%
                                    </Text>
                                </View>)}
                            </View>
                            <View className={""}>
                                <Text className={"text-sm text-stone-500 font-poppins-medium"}>
                                    {isAttendance ? "Keep going" : `Top ${Math.ceil(calculateTopPercent())}%`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </AnimatedButton>
    );
}
