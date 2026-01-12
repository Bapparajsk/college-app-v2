import Header from "@/components/header/header";
import DayButton from "@/components/routing/day-button";
import RoutingList from "@/components/routing/routing-list";
import TeacherSeason from "@/components/routing/teacher-season";
import { AnimatedButton } from "@/components/ui/button";
import { shadows } from "@/theme/shadow";
import { DayTypes, getCurrentWeekDays, getDayAndYear, isToday } from "@/units/date";
import { CalendarRangeIcon } from "lucide-react-native";
import { useCallback, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RoutingPage() {

    const [currDay, setCurrDay] = useState<DayTypes | undefined>(undefined);

    const data = useMemo(() => getCurrentWeekDays(), []);
    const todayInfo = useMemo(() => getDayAndYear(), []);

    const handleDayPress = useCallback((day: DayTypes) => {
        setCurrDay(day);
    }, []);

    return (
        <SafeAreaView className={"flex-1 bg-[#E1E6E9]"}>
            <Header />
            <ScrollView stickyHeaderIndices={[2]}>
                <TeacherSeason />
                <View className="w-full h-10 flex-row items-center justify-between px-6 my-4 bg-[#E1E6E9]">
                    <Text className="font-inter-semibold text-2xl">
                        Class Schedule
                    </Text>
                    <AnimatedButton hitSlop={20} onPress={() => setCurrDay(undefined)}>
                        <View style={shadows.sm} className="px-3 py-2 bg-white rounded-full">
                            <View className="flex-row items-center gap-1">
                                <CalendarRangeIcon size={16} />
                                <Text className="font-inter">
                                    {todayInfo.day} {todayInfo.year}
                                </Text>
                            </View>
                        </View>
                    </AnimatedButton>
                </View>
                <View className="w-full h-[4.5rem] px-4 pb-2 flex-row items-center bg-[#E1E6E9]">
                    {
                        data.map((item, index) => {
                            const isSelected = currDay === item.day || (currDay === undefined && isToday(item.date));
                            return (
                                <DayButton
                                    key={index}
                                    item={item}
                                    isSelected={isSelected}
                                    onPress={handleDayPress}
                                />
                            );
                        })
                    }
                </View>
                <RoutingList day={currDay} />
            </ScrollView>
        </SafeAreaView>
    );
}
