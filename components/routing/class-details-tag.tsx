import { LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';

type ClassDetailsTagProps = {
    title: string;
    subTitle?: string;
    Icon: LucideIcon;
    color?: string;
    subTitleColor?: string;
}

export default function ClassDetailsTag({ title, Icon: Icon, color, subTitle, subTitleColor }: ClassDetailsTagProps) {
    return (
        <View className="flex-row items-start w-[48%] gap-1">
            <View className='w-auto bg-auto'>
                <Icon size={14} color={color} />
            </View>
            <View className='gap-2'>
                <Text className='leading-none font-poppins-medium text-[#6B7280]'>{title}</Text>
                <Text style={{ color: subTitleColor }} className="leading-none font-poppins-medium">{subTitle}</Text>
            </View>
        </View>
    )
}