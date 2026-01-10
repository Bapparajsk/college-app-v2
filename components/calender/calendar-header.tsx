import { cn } from '@/units/cn';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text, View } from 'react-native';
import { ViewMode } from '../../types/calender';
// import { AnimatedButton } from '../ui/button';
// import { Button } from '../ui/button';

interface CalendarHeaderProps {
    currentDate: Date;
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    onNavigate: (direction: 'prev' | 'next') => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    currentDate,
    viewMode,
    onViewModeChange,
    onNavigate,
}) => {

    const formatHeaderDate = () => {
        switch (viewMode) {
            case 'month':
                return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            case 'week':
                return `Week of ${currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
            case 'day':
                return currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
            default:
                return currentDate.toLocaleDateString();
        }
    };

    return (
        <View className={cn('bg-white px-4 py-3 border-b border-gray-200')}>
            <View className={cn('flex-row items-center justify-between mb-3')}>
                <Text className={cn('text-2xl font-poppins-semibold text-gray-900')}>
                    {formatHeaderDate()}
                </Text>

                <View className={cn('flex-row gap-1')}>
                    <TouchableOpacity
                        onPress={() => onNavigate('prev')}
                        // size='sm'
                        className='h-8 active:opacity-70'
                        // variant='flat'
                        // radius='md'
                    >
                        <Text className={'text-gray-700 text-balance font-poppins-medium'}>Prev</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onNavigate('next')}
                        // size='sm'
                        className='h-8 active:opacity-70'
                        // variant='flat'
                        // radius='md'
                    >
                        <Text className={'text-gray-700 text-balance font-poppins-medium'}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default React.memo(CalendarHeader);