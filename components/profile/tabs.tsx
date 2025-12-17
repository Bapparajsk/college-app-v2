import { LinearGradient } from 'expo-linear-gradient';
import {
    AtSignIcon,
    BookmarkIcon,
    CogIcon,
    CpuIcon,
    LucideIcon,
    NotebookTextIcon,
    PanelsTopLeftIcon,
    StarIcon,
    UsersRoundIcon
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

const isActiveTab = (index: number, activeIndex: number): boolean => index === activeIndex;


export default function Tabs() {
    const { width } = useWindowDimensions()
    const tabWidth = (width / 3) - 8 // Subtracting padding/margin if any 

    const [activeTab, setActiveTab] = useState(0)

    const translateX = useSharedValue(0)

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }))

    const onTabPress = (index: number) => {
        setActiveTab(index)
        translateX.value = withSpring((index * tabWidth) - (index * 3), {
            damping: 30,
            stiffness: 100,
        })
    }

    return (
        <View className="w-full h-12 relative">
            <View className="w-full h-full flex-row">
                <TabButton
                    onPress={onTabPress}
                    key={0}
                    idx={0}
                    Icon={PanelsTopLeftIcon}
                    isActive={isActiveTab(0, activeTab)}
                />

                <TabButton
                    onPress={onTabPress}
                    key={1}
                    idx={1}
                    Icon={UsersRoundIcon}
                    isActive={isActiveTab(1, activeTab)}
                />

                <TabButton
                    onPress={onTabPress}
                    key={2}
                    idx={2}
                    Icon={NotebookTextIcon}
                    isActive={isActiveTab(2, activeTab)}
                />

                {/* Animated Indicator */}
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            bottom: 0,
                            width: tabWidth,
                            height: 2,
                            backgroundColor: '#111',
                            borderRadius: 999,
                        },
                        indicatorStyle,
                    ]}
                />
            </View>
            <View className='w-full mt-5'>
                <View className='w-full h-[430px] border-[3px] overflow-hidden rounded-[40px] border-gray-200'>
                    <LinearGradient
                        className={"flex-1 relative"}
                        colors={['#ffffff', '#fdfdfe', '#fafcfd', '#f6fafc', '#f3f9fa', '#eef7f8', '#e8f5f6', '#e3f3f3', '#d9f0f1', '#d0eef0', '#c6ebef', '#bce8ee']}
                    >
                        <LinearGradient
                            className='absolute bottom-0 flex-1 w-full h-9'
                            colors={['transparent', '#ffffffbb']}
                        />
                        <LinearGradient
                            className='absolute left-0 bottom-0 flex-1 w-9 h-full'
                            colors={['#ffffffbb', 'transparent']}
                            start={{ x: 0, y: 1 }}
                        />
                        <LinearGradient
                            className='absolute bottom-0 flex-1 w-9 h-full right-0'
                            colors={['#ffffffbb', 'transparent']}
                            start={{ x: 1, y: 1 }}
                        />

                        <View className='w-full h-q px-10 py-5'>
                            <View className='w-full h-12 items-end justify-center'>
                                <TouchableOpacity hitSlop={10}>
                                    <CogIcon size={26} color='#000000' />
                                </TouchableOpacity>
                            </View>
                            <View className='w-full h-auto items-start'>
                                <View className='w-full h-20'>
                                    <View className='size-20'>
                                        <View className='size-full rounded-full overflow-hidden bg-[#7BDFF2] items-center justify-center'>
                                            <CpuIcon size={30} />
                                        </View>
                                    </View>
                                </View>
                                <View className='w-full h-auto mt-3'>
                                    <View className='w-full h-auto'>
                                        <Text className='capitalize font-poppins-medium text-3xl'>
                                            Code king
                                        </Text>
                                        <Text className='capitalize font-poppins-medium text-xl text-gray-500 mt-1'>
                                            AI Developer
                                        </Text>
                                    </View>
                                </View>
                                <View className='w-full h-auto mt-2 flex-row items-center gap-2'>
                                    <View className='px-3 py-2 bg-[#b6e0e0b2] rounded-full'>
                                        <Text className='text-[14px] leading-tight font-poppins-medium'>
                                            AI
                                        </Text>
                                    </View>
                                    <View className='px-3 py-2 bg-[#b6e0e0b2] rounded-full'>
                                        <Text className='text-[14px] leading-tight font-poppins-medium'>
                                            Machine Learning
                                        </Text>
                                    </View>
                                    <View className='px-3 py-2 bg-[#b6e0e0b2] rounded-full'>
                                        <Text className='text-[14px] leading-tight font-poppins-medium'>
                                            Robotic
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View className='w-full h-20 mt-6 flex-row items-center justify-between'>
                                <View className='w-auto h-full justify-center items-center'>
                                    <View className='flex-row items-center gap-1'>
                                        <StarIcon size={22} color='#000000' />
                                        <Text className='font-poppins-medium text-2xl'>4.9</Text>
                                    </View>
                                    <Text className='font-poppins-medium text-gray-500 text-lg'>Rating</Text>
                                </View>
                                <View className='w-auto h-full justify-center items-center'>
                                    <View className='flex-row items-center gap-1'>
                                        <UsersRoundIcon size={22} color='#000000' />
                                        <Text className='font-poppins-medium text-2xl'>4.9</Text>
                                    </View>
                                    <Text className='font-poppins-medium text-gray-500 text-lg'>Member</Text>
                                </View>
                                <View className='w-auto h-full justify-center items-center'>
                                    <View className='flex-row items-center gap-1'>
                                        <AtSignIcon size={22} color='#000000' />
                                        <Text className='font-poppins-medium text-2xl'>4.9</Text>
                                    </View>
                                    <Text className='font-poppins-medium text-gray-500 text-lg'>Contributors</Text>
                                </View>
                            </View>
                            <View className="h-16 w-full flex-row items-start justify-center  mt-4 gap-4">
                                <TouchableOpacity className='flex-grow h-full bg-white/20 rounded-full flex-row items-center justify-center gap-2 border-white px-4 relative z-10 border-b-2 border-r-2'>
                                    <PanelsTopLeftIcon size={20} color='#000000' />
                                    <Text className='font-poppins-semibold text-lg'>Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='size-16 bg-white rounded-full items-center justify-center'>
                                    <BookmarkIcon />
                                </TouchableOpacity>
                            </View>     
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}


function TabButton({ onPress, Icon, idx, isActive }: { onPress: (index: number) => void; Icon: LucideIcon; idx: number; isActive: boolean }) {
    return (
        <TouchableOpacity
            className="w-1/3 h-full items-center justify-center border-b border-gray-300"
            onPress={() => onPress(idx)}
        >
            <Icon size={24} color={isActive ? "#000000" : "#cccccc"} />
        </TouchableOpacity>
    )
}