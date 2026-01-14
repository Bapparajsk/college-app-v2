import React from 'react'
import { Image, Text, View } from 'react-native'

export default function CommentCard() {
    return (
        <View className="w-full h-auto flex-row items-start justify-between">
            <View className="w-1/6 items-center">
                <View className="size-14 overflow-hidden rounded-full border border-gray-300">
                    <Image
                        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/013/511/375/non_2x/confident-and-inspired-handsome-young-businessman-looking-at-camera-while-holding-hand-on-chin-and-standing-against-grey-background-free-photo.JPG' }}
                        className="w-full h-full"
                    />
                </View>
            </View>
            <View className="w-5/6 h-auto bg-gray-300 rounded-2xl p-2">
                <Text className="text-lg font-poppins-semibold mb-1">
                    John Doe
                </Text>
                <Text className="text-base font-poppins leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View className="items-end">
                    <Text className="text-sm font-poppins-regular text-gray-600 mt-2">
                        2 hours ago
                    </Text>
                </View>
            </View>
        </View>
    )
}