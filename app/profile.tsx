import { gradient } from '@/theme/linear-gradients'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function profile() {
    return (
        <LinearGradient
            className={"flex-1"}
            colors={gradient["ProfilePage"]}
        >
            <SafeAreaView className={"flex-1"}>
                <Text>Profile Screen</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}