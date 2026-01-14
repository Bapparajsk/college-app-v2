import { useManagedBottomSheet } from '@/hooks/useBottomSheetInstance'
import { shadows } from '@/theme/shadow'
import { colors } from '@/theme/theme'
import { BottomSheetScrollView, BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { MessageCircleIcon, Share2Icon, ThumbsUpIcon, UsersRoundIcon } from 'lucide-react-native'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { AnimatedButton } from '../ui/button'
import CommentCard from './comment-card'

export default function CommunityCard() {

    const { show, expand } = useManagedBottomSheet();

    useEffect(() => {
        show(
            <>
                <View className='w-full h-10 flex-row items-center justify-center px-5'>
                    <View className='w-20 h-1.5 bg-stone-800 rounded-full my-2' />
                </View>
                <View className='w-full h-auto items-center mb-5 px-4'>
                    <View className='w-full h-auto flex-row items-end justify-between gap-2 p-1 bg-gray-200 rounded-2xl'>
                        <View className='w-4/6'>
                            <BottomSheetTextInput
                                placeholder='Write a comment...'
                                multiline
                                maxLength={150}
                                numberOfLines={4}
                                className="w-full h-auto text-base font-poppins-medium"
                            />
                        </View>
                        <AnimatedButton>
                            <View className="h-12 w-auto px-3 bg-black rounded-2xl flex-row items-center justify-center gap-2">
                                <MessageCircleIcon color="white" size={20} />
                                <Text className="text-white font-poppins-medium">Comment</Text>
                            </View>
                        </AnimatedButton>
                    </View>
                </View>
                <BottomSheetScrollView >
                    {[1, 2,].map((item) => (
                        <View key={item} className="mb-4 px-3">
                            <CommentCard />
                        </View>
                    ))}
                </BottomSheetScrollView>
            </>,
            {
                snapPoints: ["90%"],
                enableDynamicSizing: false,
                keyboardBehavior: "interactive",
            }
        );
    }, [])

    return (
        <View style={shadows.sm} className="w-full h-auto bg-white mb-2 rounded-3xl py-3 px-5">
            <View className="w-full h-16 flex-row items-center justify-between">
                <View className="w-auto h-full flex-row items-center gap-3">
                    <View className="size-16">
                        <View className="size-full rounded-full bg-gray-200 p-1.5">
                            <Image
                                source={{ uri: "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg" }}
                                className="size-full object-cover rounded-full"
                            />
                        </View>
                    </View>
                    <View className="justify-center">
                        <Text className="text-lg font-poppins-semibold">
                            Jane
                        </Text>
                        <Text className="text-sm font-poppins text-gray-500">
                            2 hours ago
                        </Text>
                    </View>
                </View>
                <AnimatedButton>
                    <View className="py-3 px-4 bg bg-gray-200 rounded-full flex-row justify-center items-center gap-1">
                        <UsersRoundIcon size={15} color={"#6b7280"} strokeWidth={3} />
                        <Text className="font-poppins-medium text-gray-500 leading-none">
                            24
                        </Text>
                    </View>
                </AnimatedButton>
            </View>
            <View className="w-full h-auto py-5">
                <Text className="font-poppins text-lg leading-relaxed">
                    <Text className="font-poppins-semibold text-success uppercase">
                        today update: {" "}
                    </Text>
                    Just tried out this amazing new app that helps you connect with like-minded individuals in your area! The community features are fantastic, and I&apos;ve already met so many interesting people. Highly recommend giving it a go!
                </Text>
            </View>
            <View className="w-full h-16 flex-row items-center justify-between">
                <AnimatedButton className="flex-grow" onPress={() => {
                    console.log("press");
                    expand();

                }}>
                    <View className="w-full h-full flex-row items-center gap-2 bg-gray-200 rounded-full">
                        <View className="w-auto h-full flex-row items-center gap-1.5">
                            <View className="size-16">
                                <View className="size-full rounded-full bg-gray-200 p-2">
                                    <Image
                                        source={{ uri: "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg" }}
                                        className="size-full object-cover rounded-full"
                                    />
                                </View>
                            </View>
                            <View className="justify-center">
                                <Text className="text-base font-poppins-medium text-gray-600">
                                    Comments here
                                </Text>
                            </View>
                        </View>
                    </View>
                </AnimatedButton>
                <AnimatedButton scale={1} className="ml-4">
                    {({ pressed }) => (
                        <View className="rounded-full overflow-hidden border border-transparent">
                            <View style={{ backgroundColor: pressed ? "#e5e7eb" : "transparent" }} className="py-4 px-3 flex-row items-center gap-1.5">
                                <ThumbsUpIcon size={18} color={colors.primary} />
                                <Text style={{ color: colors.primary }} className="text-xl font-poppins leading-none">
                                    39
                                </Text>
                            </View>
                        </View>
                    )}
                </AnimatedButton>
                <AnimatedButton scale={1} onPress={() => {
                    // console.log("press");

                }}>
                    {({ pressed }) => (
                        <View className="rounded-full overflow-hidden border border-transparent">
                            <View style={{ backgroundColor: pressed ? "#e5e7eb" : "transparent" }} className="p-4">
                                <Share2Icon size={18} color={"#6b7280"} />
                            </View>
                        </View>
                    )}
                </AnimatedButton>
            </View>
        </View>
    )
}