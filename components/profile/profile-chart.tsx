import { shadows } from "@/theme/shadow";
import { formatDay, getMonthAndYear } from "@/units/date";
import { CalendarIcon } from "lucide-react-native";
import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { RadarChart } from "react-native-gifted-charts";
import { AnimatedButton } from "../ui/button";

export default function ProfileChart() {
    const { month, year } = useMemo(() => getMonthAndYear(), []);

    return (
        <View className="w-full h-auto mt-5">
            <View className="w-full flex-row justify-between items-center mb-3 px-1">
                <Text className="text-3xl font-poppins-semibold">OverView</Text>
                <View className="flex-row gap-2 overflow-hidden rounded-full bg-gray-200 px-4 py-2 items-center">
                    <CalendarIcon size={16} />
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
                isAnimated={true}
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
                    fill: "rgba(34, 139, 230, 0.2)",
                    stroke: "#228BE6",
                    strokeWidth: 1,
                    showDataValuesAsLabels: true,
                }}
                asterLinesConfig={{ strokeWidth: 0 }}
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
                <View className="w-1/2 h-52 pr-2">
                    <AnimatedButton>
                        <View
                            style={shadows.sm}
                            className="w-full h-full bg-white rounded-2xl"
                        ></View>
                    </AnimatedButton>
                </View>
                <View className="w-1/2 h-52 pl-2">
                    <AnimatedButton>
                        <View
                            style={shadows.sm}
                            className="w-full h-full bg-white rounded-2xl"
                        ></View>
                    </AnimatedButton>
                </View>
            </View>
        </View>
    );
}
