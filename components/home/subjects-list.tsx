import React from 'react'
import { Text, View } from 'react-native'
import Squircle from '../ui/squircle-vew'

export default function SubjectsList() {
    return (
        <View className='w-full h-auto mt-2'>
            <Text className='font-poppins-semibold text-xl'>Subjects</Text>
            <View className='size-52 relative rounded-2xl  justify-center items-center overflow-hidden'>
                <Squircle
                    width={218}
                    height={218}
                    curvature={0.7}
                    color='#EFF7F6'
                    style={{ position: 'absolute', top: -14, left: -20, zIndex: -1 }}
                />
            </View>
        </View>
    )
}