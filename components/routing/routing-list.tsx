import { FlashList } from '@shopify/flash-list';
import React from 'react';
import RoutingCard from './routing-card';

export default function RoutingList() {

    
    const classData = [
        { id: 1, time: "09:00 AM", subject: "Mathematics", room: "A-101", type: "Lecture" },
        { id: 2, time: "11:00 AM", subject: "Physics", room: "Lab-3", type: "Laboratory" },
        { id: 3, time: "02:00 PM", subject: "Chemistry", room: "B-205", type: "Lecture" },
    ];
    return (
        <FlashList
            data={[...classData, ...classData, ...classData]}
            renderItem={({ item }) => (
                <RoutingCard />
            )}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 80, paddingHorizontal: 16 }}
            showsVerticalScrollIndicator={false}
        />
    )
}