import { LinearGradient } from 'expo-linear-gradient'
import { FlaskConicalIcon } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { AnimatedButton } from '../ui/button'
import Chip from '../ui/chip'

export default function RoutingCard() {
    return (
        <AnimatedButton>
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
                                <View className='size-full rounded-full bg-[#00d86530] border border-[#00D86660] items-center justify-center'>
                                    <FlaskConicalIcon color={"#00D866"} />
                                </View>
                            </View>
                            <View className='w-auto justify-center'>
                                <Text className='font-poppins-semibold text-xl'>
                                    Chemistry Lab
                                </Text>
                                <Text className='font-inter text-sm text-stone-500'>
                                    11:00 AM
                                </Text>
                                <View className='flex-row mt-1'>
                                    <Chip
                                        title="Laboratory"
                                        className="mr-2"
                                        color="#a8a29e"
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text className='font-inter-semibold text-sm text-stone-500 mr-4'>
                                Room: Lab-3
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </AnimatedButton>
    )
}