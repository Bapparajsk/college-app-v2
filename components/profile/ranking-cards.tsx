import { ChartNoAxesCombinedIcon, UserRoundCheckIcon } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import RankingCard from './ranking-card'

export default function RankingCards() {
    return (
        <View className="w-full h-auto mt-5">
            <View>
                <Text className="text-3xl font-poppins-semibold mb-3">Rankings</Text>
            </View>
            <View className='flex-row'>
                <View className="w-1/2 h-44 pr-1">
                    <RankingCard
                        Icon={<UserRoundCheckIcon size={20} color={"#fff"} />}
                        title={"Attendance"}
                        value={{ primary: "298", secondary: "300 Days" }}
                        iconColor={"#4CB9F8"}
                        toGradient={"#9cd3f3"}
                        isAttendance={true}
                    />
                </View>
                <View className="w-1/2 h-44 pl-1">
                    <RankingCard
                        Icon={<ChartNoAxesCombinedIcon size={20} color={"#fff"} />}
                        title={"Ranking"}
                        value={{ primary: "3", secondary: "150 Students" }}
                        iconColor={"#7C60DC"}
                        toGradient={"#a393de"}
                    />
                </View>
            </View>
        </View>
    )
}