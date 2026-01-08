import { CheckIcon, CircleGaugeIcon, HouseIcon } from 'lucide-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import CircularProgress from '../ui/CircularProgress'

export default function TeacherSeason() {
    return (
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
    )
}