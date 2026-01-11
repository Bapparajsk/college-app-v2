import { DayTypes } from '@/units/date';
import { FlashList } from '@shopify/flash-list';
import { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import RoutingCard from './routing-card';
import { getTodaysRoutine } from './routing-details';


type RoutingListProps = {
    day?: DayTypes;
};

const RoutingList = memo(({ day }: RoutingListProps) => {
    const classData = useMemo(() => {
        return getTodaysRoutine(day);
    }, [day]);

    if (!classData.length) {
        return (
            <View className="flex-1 items-center justify-center px-6 py-12">
                <Text className="font-inter text-gray-500 text-lg text-center">
                    {day
                        ? `No classes scheduled for ${day}`
                        : "No classes scheduled today"}
                </Text>
            </View>
        );
    }

    return (
        
        <FlashList
            data={classData}
            renderItem={({ item }) => {
                return <RoutingCard {...item} />;
            }}
            keyExtractor={(item) =>` ${item.subject}_${item.time.start}_${item.time.end}` }
            contentContainerStyle={{
                paddingTop: 12,
                paddingBottom: 80,
                paddingHorizontal: 16
            }}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
        />
    );
});

RoutingList.displayName = 'RoutingList';

export default RoutingList;