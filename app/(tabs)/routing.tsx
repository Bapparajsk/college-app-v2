import Header from "@/components/header/header";
import RoutingList from "@/components/routing/routing-list";
import TeacherSeason from "@/components/routing/teacher-season";
import { AnimatedButton } from "@/components/ui/button";
import { formatDay, getCurrentWeekDays, isToday } from "@/units/date";
import { ChevronDownIcon } from "lucide-react-native";
import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomePage() {

    const data = useMemo(() => getCurrentWeekDays(), []);

    return (
        <SafeAreaView className={"flex-1 bg-[#E1E6E9]"}>
            <Header />
            <ScrollView stickyHeaderIndices={[2]}>
                <TeacherSeason />
                <View className="w-full h-10 flex-row items-center justify-between px-6 my-4 bg-[#E1E6E9]">
                    <Text className="font-inter-semibold text-2xl">
                        Class Schedule
                    </Text>
                    <AnimatedButton scale={0.99}>
                        <View className="px-3 py-2 bg-white rounded-full">
                            <View className="flex-row items-center gap-1">
                                <Text className="font-inter leading-none">
                                    Dec 2025
                                </Text>
                                <ChevronDownIcon size={20} />
                            </View>
                        </View>
                    </AnimatedButton>
                </View>
                <View className="w-full h-[4.5rem] px-4 pb-2 flex-row items-center bg-[#E1E6E9]">
                    {
                        data.map((item, index) => {
                            const today = isToday(item.date);
                            return (
                                <AnimatedButton key={index}>
                                    <View
                                        style={{ backgroundColor: today ? "#000000" : "#FFFFFF" }}
                                        className="w-14 h-full mx-1 rounded-3xl items-center justify-center"
                                    >
                                        <Text
                                            style={{ color: today ? "#FFFFFF" : "#000000" }}
                                            className="font-inter-semibold text-sm"
                                        >
                                            {formatDay(item.day)}
                                        </Text>
                                        <Text
                                            style={{ color: today ? "#FFFFFF" : "#6B7280" }}
                                            className="font-inter text-sm "
                                        >
                                            {item.date.day}
                                        </Text>
                                    </View>
                                </AnimatedButton>
                            );
                        })
                    }
                </View>
                <RoutingList />
            </ScrollView>
        </SafeAreaView>
    );
}
