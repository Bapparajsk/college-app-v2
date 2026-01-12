import { SendIcon } from 'lucide-react-native'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { AnimatedButton } from '../ui/button'

export default function InputButton() {
    return (
        <View className="w-full h-[4.5rem] flex-row bg-gray-300/70 p-2 rounded-full items-center justify-between gap-1">
            <View className="flex-grow h-auto flex-1">
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={100}
                    placeholder="Write here..."
                    className="flex-grow h-auto px-4 py-2 text-base font-poppins"
                />
            </View>
            <AnimatedButton>
                <View className="h-full w-auto px-3 bg-black rounded-full flex-row items-center justify-center gap-2">
                    <SendIcon color="white" size={20} />
                    <Text className="text-white font-poppins-medium">Post now</Text>
                </View>
            </AnimatedButton>
        </View>
    )
}