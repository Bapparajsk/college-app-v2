import { sampleProjects, simpleMembers } from '@/data/sampleProjects';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import {
    LucideIcon,
    NotebookTextIcon,
    PanelsTopLeftIcon,
    UsersRoundIcon
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import ProjectCard from '../ui/project-card';
import MemberCard from './member-card';

const isActiveTab = (index: number, activeIndex: number): boolean => index === activeIndex;

export default function Tabs() {

    const router = useRouter();
    const { width } = useWindowDimensions()
    const tabWidth = (width / 3) - 7 // Subtracting padding/margin if any 

    const [activeTab, setActiveTab] = useState(0)
    const translateX = useSharedValue(0)
    

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }))

    const onTabPress = (index: number) => {
        if (activeTab === index) return // Don't do anything if clicking same tab
        
        setActiveTab(index)
        translateX.value = withSpring((index * tabWidth) - (index * 3), {
            damping: 30,
            stiffness: 100,
        })
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Tab Header */}
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
                        onPress={() => {
                            router.push('/college-profile');
                        }}
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
            
            {/* Content Area - Keep both lists rendered but hide inactive ones */}
            <View style={{ flex: 1 }}>
                {/* Projects Tab */}
                <View style={{ 
                    display: activeTab === 0 ? 'flex' : 'none',
                    flex: 1 
                }}>
                    <FlashList
                        data={sampleProjects}
                        renderItem={({ item }) => <ProjectCard {...item} />}
                        // estimatedItemSize={100}
                        keyExtractor={(item, index) => `project-${index}`}
                        contentContainerStyle={{ paddingVertical: 20 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                
                {/* Members Tab */}
                <View style={{ 
                    display: activeTab === 1 ? 'flex' : 'none',
                    flex: 1 
                }}>
                    <FlashList
                        data={simpleMembers}
                        renderItem={({ item }) => <MemberCard {...item} />}
                        // estimatedItemSize={80}
                        keyExtractor={(item, index) => `member-${index}`}
                        contentContainerStyle={{ paddingVertical: 20 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                
                {/* Tasks Tab (Third tab) */}
                <View style={{ 
                    display: activeTab === 2 ? 'flex' : 'none',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <NotebookTextIcon size={48} color="#cccccc" />
                    <Text className="mt-4 text-gray-400">Tasks coming soon</Text>
                </View>
            </View>
        </View>
    )
}

function TabButton({ onPress, Icon, idx, isActive }: { onPress: (index: number) => void; Icon: LucideIcon; idx: number; isActive?: boolean }) {
    return (
        <TouchableOpacity
            className="w-1/3 h-full items-center justify-center border-b border-gray-300"
            onPress={() => onPress(idx)}
            activeOpacity={0.7}
        >
            <Icon size={24} color={isActive ? "#000000" : "#cccccc"} />
        </TouchableOpacity>
    )
}