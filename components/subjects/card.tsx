import { shadows } from '@/theme/shadow'
import { BookUserIcon, BoxesIcon, LibraryIcon, StarIcon } from 'lucide-react-native'
import React, { ReactNode } from 'react'
import { Image, Text, View } from 'react-native'
import { AnimatedButton } from '../ui/button'

export default function SubjectCard() {
    return (
        <View style={[shadows.sm, { shadowColor: '#006FEE' }]} className='w-full h-auto p-[1px] bg-gray-300 rounded-lg mt-4'>
            <View className='w-full h-auto p-2 bg-white rounded-lg '>
                <View className='flex-row'>
                    <Image
                        source={{
                            uri: "https://th.bing.com/th/id/OIG1.YDN5XclzrDlZOgjerFix?pid=ImgGn"
                        }}
                        className='size-20'
                        resizeMode='center'
                    />
                    <View className='justify-center gap-1'>
                        <Text className='text-2xl font-poppins-semibold text-gray-800'>
                            Mathematic-I
                        </Text>
                        <Text className='text-lg font-poppins-medium text-gray-600'>
                            Fundamentals of Algebra
                        </Text>
                    </View>
                </View>
                <View className='w-full h-14 py-4 flex-row justify-between'>
                    <ListBar
                        Icon={<BookUserIcon size={20} color='#4B5563' />}
                        title="Author"
                        subtitle="John Doe"
                    />  
                    <ListBar
                        Icon={<BoxesIcon size={20} color='#4B5563' />}
                        title="Modules"
                        subtitle="12"
                    />  
                    <ListBar
                        Icon={<StarIcon size={20} color='#eab308' />}
                        title="Rating"
                        subtitle={
                            <View className='flex-row items-center'>
                                <Text className='text-lg font-poppins-semibold'>4.5</Text>
                                <StarIcon size={18} color='#d1d5db' />
                            </View>
                        }
                    /> 
                </View>
                <View className='w-full flex-row justify-between my-3'>
                    <AnimatedButton scale={0.98} activeOpacity={0.9}>
                        <View style={[shadows.sm, {shadowColor: '#7c3aed'}]} className='w-52 h-16 bg-purple-500 rounded-full p-0.5'>
                            <View className='w-full h-full bg-white rounded-full justify-center items-center px-6 flex-row gap-2'>
                                <LibraryIcon size={24} color='#7c3aed' />
                                <Text className='text-lg font-poppins-semibold text-purple-500'>
                                    View Material
                                </Text>
                            </View>
                        </View>
                    </AnimatedButton>
                    <View className='w-auto'>
                        <Text className='text-sm font-poppins-medium text-gray-600'>
                            Last Edited:
                        </Text>
                        <Text className='text-base font-poppins-semibold text-gray-800'>
                            June 20, 2024
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

type ListBarProps = {
    Icon: ReactNode;
    title: string | ReactNode;
    subtitle: string | ReactNode;
}

function ListBar({ Icon, title, subtitle }: ListBarProps) {



    return (
        <View className='flex-row items-center gap-1'>
            {Icon}
            <View className='flex-row  gap-1 items-center'>
                {typeof title === 'string' ? (
                    <Text className='text-sm font-poppins-medium text-gray-500'>
                        {title}
                    </Text>
                ) : (
                    title
                )}
                <Text className='text-sm font-poppins-medium text-gray-500'>:</Text>
                {typeof subtitle === 'string' ? (
                    <Text className='text-md font-poppins-semibold text-gray-800'>
                        {subtitle}
                    </Text>
                ) : (
                    subtitle
                )}
            </View>
        </View>
    )
}