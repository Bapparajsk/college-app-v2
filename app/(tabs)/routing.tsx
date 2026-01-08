import Header from "@/components/header/header";
import RoutingCard from "@/components/routing/routing-card";
import CircularProgress from "@/components/ui/CircularProgress";
import { formatDay, getCurrentWeekDays, isToday } from "@/units/date";
import { FlashList } from "@shopify/flash-list";
import { CheckIcon, ChevronDownIcon, CircleGaugeIcon, HouseIcon } from "lucide-react-native";
import { useMemo } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomePage() {

    const data = useMemo(() => getCurrentWeekDays(), []);
    const classData = [
        { id: 1, time: "09:00 AM", subject: "Mathematics", room: "A-101", type: "Lecture" },
        { id: 2, time: "11:00 AM", subject: "Physics", room: "Lab-3", type: "Laboratory" },
        { id: 3, time: "02:00 PM", subject: "Chemistry", room: "B-205", type: "Lecture" },
    ];

    return (
        <SafeAreaView className={"flex-1 bg-[#eff7f6]"}>
            <Header />
            <ScrollView stickyHeaderIndices={[2]}>
                <View className="px-4">
                    <Text className="font-inter-semibold text-xl text-stone-500 ml-2">
                        Professor
                    </Text>
                    <View className="w-full h-auto flex-row justify-between px-2">
                        <View className="w-3/4">
                            <Text className="font-poppins-semibold text-4xl leading-normal mb-auto">
                                Jujit Pathak
                            </Text>
                        </View>
                        <View className="border-2 border-stone-300 rounded-full">
                            <CircularProgress
                                size={80}
                                strokeWidth={0}
                                progress={100}
                                duration={0}
                                color={"#4ade80"}
                                bgColor={"#d1fae5"}
                                showText={true}
                            >
                                <Image
                                    source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.Sko8CQSOZhYy3u_kQB6J3QHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" }}
                                    className="size-full rounded-full"
                                />
                            </CircularProgress>
                        </View>
                    </View>
                    <View className="mt-4 w-full h-52 bg-[#BDE0FE] rounded-[30px] overflow-hidden p-3 items-start">
                        <View className="w-auto h-20">
                            <View className="w-52 h-16 bg-white rounded-full p-1 flex-row items-center">
                                <View className="size-14 bg-[#BDE0FE] rounded-full mr-3 items-center justify-center">
                                    <CheckIcon color={"#000000"} size={24} />
                                </View>

                                <Text className="font-inter-semibold text-lg">
                                    12 AM - 1 PM
                                </Text>
                            </View>
                        </View>
                        <View className="w-full h-auto">
                            <Text className="font-inter-semibold text-3xl">
                                Application Physics
                            </Text>
                        </View>
                        <View className="w-full h-auto mt-4 flex-row items-center gap-1">
                            <View className='px-3 py-2 bg-[#ffffff7e] rounded-full flex-row items-center gap-2'>
                                <HouseIcon size={14} />
                                <Text className='text-[14px] leading-none font-poppins-medium'>
                                    A-1
                                </Text>
                            </View>
                            <View className='px-3 py-2 bg-[#ffffff7e] rounded-full flex-row items-center gap-2'>
                                <CircleGaugeIcon size={14} />
                                <Text className='text-[14px] leading-none font-poppins-medium'>
                                    Laboratory
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="w-full h-10 flex-row items-center justify-between px-6 my-4 bg-[#eff7f6]">
                    <Text className="font-inter-semibold text-2xl">
                        Class Schedule
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} className="px-3 py-2 bg-white rounded-full">
                        <View className="flex-row items-center gap-1">
                            <Text className="font-inter leading-none">
                                Dec 2025
                            </Text>
                            <ChevronDownIcon size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="w-full h-[4.5rem] px-4 pb-2 flex-row items-center bg-[#eff7f6]">
                    {
                        data.map((item, index) => {
                            const today = isToday(item.date);
                            return (<TouchableOpacity style={{
                                backgroundColor: today ? "#000000" : "#FFFFFF"
                            }} key={index} activeOpacity={0.7} className="w-14 h-full mx-1 rounded-3xl items-center justify-center">
                                <Text style={{
                                    color: today ? "#FFFFFF" : "#000000"
                                }} className="font-inter-semibold text-sm">
                                    {formatDay(item.day)}
                                </Text>
                                <Text style={{
                                    color: today ? "#FFFFFF" : "#6B7280"
                                }} className="font-inter text-sm ">
                                    {item.date.day}
                                </Text>
                            </TouchableOpacity>);
                        })
                    }
                </View>
                <FlashList
                    data={[...classData, ...classData, ...classData]}
                    renderItem={({ item }) => (
                        <RoutingCard/>
                    )}
                    contentContainerStyle={{ paddingTop: 10, paddingBottom: 80}}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
