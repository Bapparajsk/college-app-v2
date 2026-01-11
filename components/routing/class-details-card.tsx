import React from 'react'
import { Text, View } from 'react-native'
import { BottomSheetContent } from '../ui/BottomSheetComponents'

export default function ClassDetailsCard() {
    return (
        <BottomSheetContent>
            <View className="p-4">
                <Text className="font-inter text-lg">
                    Class Details Content
                </Text>
            </View>
        </BottomSheetContent>
    )
}