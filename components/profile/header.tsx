import { useNavigation } from 'expo-router';
import { ArrowLeftIcon } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View className='w-full h-24 flex-row items-end justify-between bg-transparent'>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size={24} color='#000000' />
            </TouchableOpacity>
            <Text className='text-xl font-poppins-medium'>Profile</Text>
            <View className='w-6' />
        </View>
    )
}