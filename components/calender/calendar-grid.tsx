import { cn } from '@/units/cn';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CalendarDay } from '../../types/calender';

interface CalendarGridProps {
    days: CalendarDay[];
    onSelectDate: (date: Date) => void;
    viewMode: 'month' | 'week' | 'day';
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    days,
    onSelectDate,
    viewMode
}) => {

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if (viewMode === 'day') {
        const day = days.find(d => d.isSelected) || days[0];
        return (
            <ScrollView className={cn('flex-1 bg-white')}>
                <View className={cn('p-4')}>
                    <Text className={cn('text-lg font-semibold text-gray-900 mb-4')}>
                        Events for {day.date.toLocaleDateString()}
                    </Text>
                    {day.events.map(event => (
                        <View key={event.id} className={cn('bg-primary-50 p-3 rounded-lg mb-2')}>
                            <Text className={cn('font-medium text-gray-900')}>{event.title}</Text>
                            <Text className={cn('text-gray-600 text-sm')}>
                                {event.startTime} - {event.endTime}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }

    return (
        <View className={cn('flex-1 bg-white h-auto')}>
            <View className={cn('flex-row border-b justify-center border-gray-200')}>
                {weekDays.map(day => (
                    <View key={day} className={cn('flex-1 py-3')}>
                        <Text className={cn('text-center text-[12px] font-poppins-medium text-gray-600')}>
                            {day}
                        </Text>
                    </View>
                ))}
            </View>
            <View className={cn('flex-row flex-wrap w-full h-fit')}>
                {days.map((day, index) => (
                    <TouchableOpacity
                        key={index}
                        className={cn(`w-[14.20%] p-2 border-b  border-gray-100`,
                            day.isSelected ? 'bg-primary-50' : '',
                            day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                            index % 7 !== 0 ? 'border-l' : ''
                        )}
                        onPress={() => onSelectDate(day.date)}
                    >
                        <View className={cn(`items-center justify-center w-8 h-8 rounded-full ${day.isToday ? 'text-blue-500' : ''
                            } ${day.isSelected && !day.isToday ? 'text-blue-500' : ''}`)}>
                            <Text className={cn(`text-balance text-[12px] font-poppins-medium `,
                                day.isToday ? 'text-[#006FEE]' : day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400',
                                day.isSelected && !day.isToday ? 'text-[#006FEE]' : ''
                            )}>
                                {day.date.getDate()}
                            </Text>
                        </View>

                        {day.events.length > 0 && (
                            <View className={cn('mt-1')}>
                                {day.events.slice(0, 2).map(event => (
                                    <View
                                        key={event.id}
                                        className={cn('h-1 bg-primary-500 rounded-full mb-1')}
                                    />
                                ))}
                                {day.events.length > 2 && (
                                    <Text className={cn('text-xs text-gray-500 text-center')}>
                                        +{day.events.length - 2}
                                    </Text>
                                )}
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default React.memo(CalendarGrid);