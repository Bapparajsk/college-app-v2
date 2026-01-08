import { buttonVariants } from '@/theme/theme';
import { ButtonKeys } from '@/types/buttonVariants';
import { cn } from '@/units/cn';
import React from 'react';
import { Text, View } from 'react-native';

type ChipProps = {
    title?: string | React.ReactNode;
    titleClassName?: string;
    className?: string;
    color?: ButtonKeys | `#${string}` ;
}

export default function Chip({ title, titleClassName, className, color = "default"}: ChipProps) {
    // const backgroundColor = color.startsWith('#') ? color : colors[color as ButtonKeys] || colors['default'];

    const { default: backgroundColor, text } = color.startsWith('#') ? { default: color, text: '#000' } : buttonVariants[color as ButtonKeys];

    return (
        <View className={cn('px-2 py-1 rounded-full', className)} style={{ backgroundColor: backgroundColor+ '99' }}>
            {typeof title === 'string' ? (
                <Text className={cn('font-poppins text-sm', titleClassName)} style={{ color: text }}>
                    {title}
                </Text>
            ) : ( title )}
        </View>
    )
}