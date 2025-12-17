import { BookmarkIcon, MenuIcon, PackagePlusIcon, StarIcon } from 'lucide-react-native'
import React, { Fragment } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function UserDetails() {
    return (
        <Fragment>
            <View className='flex-row justify-start items-center w-full overflow-hidden mt-6'>
                <View className='size-32 p-2' >
                    <Image
                        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/029/640/896/large_2x/side-view-of-a-handsome-young-man-face-on-white-background-generative-ai-free-photo.jpeg' }}
                        className='w-full h-full rounded-3xl border-2 border-gray-500'
                        resizeMode='cover'
                    />
                </View>
                <View className='flex-grow h-32' >
                    <View className='w-auto h-full items-start justify-center gap-1 ml-4'>
                        <Text className='text-2xl font-poppins-medium'>Bapparaj sk</Text>
                        <Text className='font-poppins-medium text-gray-700 text-lg'>Student at XYZ University</Text>
                        <View className='px-3 py-2 bg-[#c5c9c9] rounded-xl'>
                            <Text className='text-[14px] leading-none font-poppins-medium'>
                                1st Year
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className='w-full py-4 flex-row justify-around mb-3'>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Rating</Text>
                    <View className='flex-row items-center'>
                        <Text className='text-2xl font-poppins-medium'>4.5 </Text>
                        <StarIcon size={20} />
                    </View>
                </View>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Skill avg.</Text>
                    <Text className='text-2xl font-poppins-medium'>7.9/10</Text>
                </View>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Projects</Text>
                    <Text className='text-2xl font-poppins-medium'>5</Text>
                </View>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Experience</Text>
                    <Text className='text-2xl font-poppins-medium'>+2y</Text>
                </View>
            </View>
            <View className='w-full h-14 py-1 flex-row gap-2 items-center justify-between'>
                <TouchableOpacity className='h-full flex-grow flex-row items-center justify-center gap-2 bg-black rounded-2xl'>
                    <PackagePlusIcon size={20} color='#ffffff' />
                    <Text className='text-lg font-poppins-medium text-white'>Create Project</Text>
                </TouchableOpacity>
                <TouchableOpacity className='h-full flex-grow flex-row items-center justify-center gap-2 bg-[#c5c9c97b] rounded-2xl'>
                    <BookmarkIcon size={20} />
                    <Text className='text-lg font-poppins-medium'>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity className='h-full w-12 items-center justify-center gap-2 bg-[#c5c9c97b] rounded-2xl'>
                    <MenuIcon size={20} />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}