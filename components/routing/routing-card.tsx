import { useManagedBottomSheet } from '@/hooks/useBottomSheetInstance'
import { getGradientColors } from '@/units/color'
import { formatHourTo12 } from '@/units/date'
import { LinearGradient } from 'expo-linear-gradient'
import { ClockIcon, HomeIcon } from 'lucide-react-native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { AnimatedButton } from '../ui/button'
import Chip from '../ui/chip'
import ClassDetailsCard from './class-details-card'
import { RoutingDetails } from './routing-details'

export default function RoutingCard({ subject, classType, classTypeIcon: ClassTypeIcon, room, icon: Icon, time, color }: RoutingDetails) {
    const { show, expand, close } = useManagedBottomSheet();


    useEffect(() => {

        show(
            <ClassDetailsCard/>,
            {
                snapPoints: ['80%'],
                enablePanDownToClose: true,
                enableHandlePanningGesture: false,
            }
        );

        return () => {
            close();
        }
    },[])

    return (
        <AnimatedButton onPress={expand}>
            <View className='mb-3 w-full h-[85px] flex-row overflow-hidden border border-stone-600/30'
                style={{ borderRadius: 9999 }}
            >
                <LinearGradient
                    colors={['#bebebe', '#c4c4c4', '#cacaca', '#d1d0d0', '#d7d6d6', '#dbdada', '#e0dede', '#e4e2e2', '#e7e5e5', '#eae8e8', '#edebeb', '#f0eeee']}
                    start={{ x: 0, y: 1 }}
                    className='w-full h-full'
                    style={{ borderRadius: 9999999 }}
                >
                    <View className='w-full h-full flex-row items-center justify-between'>
                        <View className='flex-row gap-2'>
                            <View className='size-24 p-1.5'>
                                <View style={{ backgroundColor: `${color}30`, borderColor: `${color}60` }} className='size-full rounded-full border items-center justify-center'>
                                    <LinearGradient
                                        colors={getGradientColors(color || "#000000") as any}
                                        start={{ x: 0, y: 0 }} 
                                        end={{ x: 1, y: 1 }}
                                        className='size-full items-center justify-center'
                                        style={{ borderRadius: 9999 }}
                                    >
                                        <Icon color={color} size={30}/>
                                    </LinearGradient>
                                </View>
                            </View>
                            <View className='w-auto justify-center'>
                                <Text className='font-poppins-semibold text-xl'>
                                    {subject}
                                </Text>
                                <View className='flex-row mt-1'>
                                    <Chip
                                        title={formatHourTo12(time.start)}
                                        className="mr-2"
                                        Icon={<ClockIcon size={12} color="#71717a" />}
                                        color="#a8a29e"
                                    />
                                    <Chip
                                        title={classType}
                                        className="mr-2"
                                        color="#a8a29e"
                                        Icon={<ClassTypeIcon size={12} color="#71717a" />}
                                    />
                                    <Chip
                                        title={`Room: ${room}`}
                                        className="mr-2"
                                        color="#a8a29e"
                                        Icon={<HomeIcon size={12} color="#71717a" />}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </AnimatedButton>
    )
}