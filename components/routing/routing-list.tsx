import { FlashList } from '@shopify/flash-list';
import React, { useMemo } from 'react';
import RoutingCard from './routing-card';
import { getTodaysRoutine } from './routing-details';

export default function RoutingList() {

    
    const classData = useMemo(() => {
        return getTodaysRoutine();
    }, [])

    return (
        <FlashList
            data={classData}
            renderItem={({ item }) => (
                <RoutingCard {...item} />
            )}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 80, paddingHorizontal: 16 }}
            showsVerticalScrollIndicator={false}
        />
    )
}