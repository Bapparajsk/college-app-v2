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
    Icon?: React.ReactNode;
}

export default function Chip({ title, titleClassName, className, color = "default", Icon}: ChipProps) {

    const { default: backgroundColor, text } = color.startsWith('#') ? { default: color, text: '#000' } : buttonVariants[color as ButtonKeys];

    return (
        <View className={cn('px-2 py-1 rounded-full items-center flex-row', className)} style={{ backgroundColor: backgroundColor+ '99' }}>
            {Icon && (<View className='mr-1 inline-block'>{Icon}</View>)}
            {typeof title === 'string' ? (
                <Text className={cn('font-poppins text-sm', titleClassName)} style={{ color: text }}>
                    {title}
                </Text>
            ) : ( title )}
        </View>
    )
}