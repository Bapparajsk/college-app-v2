import { shadows } from '@/theme/shadow'
import { colors } from '@/theme/theme'
import { Share2Icon, ThumbsUpIcon, UsersRoundIcon } from 'lucide-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { AnimatedButton } from '../ui/button'

export default function CommunityCard() {
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
                            Jane Doe
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
                <AnimatedButton className="flex-grow">
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
                <AnimatedButton scale={1}>
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