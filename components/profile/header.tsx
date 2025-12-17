import { useNavigation } from 'expo-router';
import { ArrowLeftIcon } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
} from 'react-native-reanimated';

export default function Header({ scrollY }: { scrollY: any }) {
    const navigation = useNavigation();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                scrollY.value,
                [0, 300],
                ['#b9b7b7', '#ffffff']
            ),
        };
    });

    return (
        <Animated.View style={[animatedStyle]} className='w-full h-24 flex-row items-end justify-between px-4 pb-3 absolute top-0 z-10'>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size={24} color='#000000' />
            </TouchableOpacity>

            <Text className="text-xl font-poppins-medium">Profile</Text>

            <Text className="w-6" />
        </Animated.View>
    );
}
