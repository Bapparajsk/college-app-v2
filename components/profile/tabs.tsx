import {
    LucideIcon,
    NotebookTextIcon,
    PanelsTopLeftIcon,
    UsersRoundIcon
} from 'lucide-react-native';
import React, { useState } from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import Cards from './cards';
import MemberCard from './member-card';

const isActiveTab = (index: number, activeIndex: number): boolean => index === activeIndex;


export default function Tabs() {
    const { width } = useWindowDimensions()
    const tabWidth = (width / 3) - 8 // Subtracting padding/margin if any 

    const [activeTab, setActiveTab] = useState(0)

    const translateX = useSharedValue(0)

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }))

    const onTabPress = (index: number) => {
        setActiveTab(index)
        translateX.value = withSpring((index * tabWidth) - (index * 3), {
            damping: 30,
            stiffness: 100,
        })
    }

    return (
        <View>
            <View className="w-full h-12 relative">
                <View className="w-full h-full flex-row">
                    <TabButton
                        onPress={onTabPress}
                        key={0}
                        idx={0}
                        Icon={PanelsTopLeftIcon}
                        isActive={isActiveTab(0, activeTab)}
                    />

                    <TabButton
                        onPress={onTabPress}
                        key={1}
                        idx={1}
                        Icon={UsersRoundIcon}
                        isActive={isActiveTab(1, activeTab)}
                    />

                    <TabButton
                        onPress={onTabPress}
                        key={2}
                        idx={2}
                        Icon={NotebookTextIcon}
                        isActive={isActiveTab(2, activeTab)}
                    />

                    {/* Animated Indicator */}
                    <Animated.View
                        style={[
                            {
                                position: 'absolute',
                                bottom: 0,
                                width: tabWidth,
                                height: 2,
                                backgroundColor: '#111',
                                borderRadius: 999,
                            },
                            indicatorStyle,
                        ]}
                    />
                </View>
            </View>
            <MemberCard/>
            <Cards/>
        </View>
    )
}


function TabButton({ onPress, Icon, idx, isActive }: { onPress: (index: number) => void; Icon: LucideIcon; idx: number; isActive: boolean }) {
    return (
        <TouchableOpacity
            className="w-1/3 h-full items-center justify-center border-b border-gray-300"
            onPress={() => onPress(idx)}
        >
            <Icon size={24} color={isActive ? "#000000" : "#cccccc"} />
        </TouchableOpacity>
    )
}