import Header from '@/components/profile/header';
import Tabs from '@/components/profile/tabs';
import UserDetails from '@/components/profile/user-details';
import { gradient } from '@/theme/linear-gradients';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function profile() {
    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='w-full h-auto rounded-xl justify-center items-center'>
                <LinearGradient
                    className={"flex-1"}
                    colors={gradient["ProfilePage"]}
                    style={{ width: '100%' }}
                >
                    <View className='w-full h-auto px-4'>
                        <Header />
                        <UserDetails />
                    </View>
                </LinearGradient>
            </View>
            <View className='px-4 mt-3'>
                <Tabs/>
            </View>
        </ScrollView>
    )
}