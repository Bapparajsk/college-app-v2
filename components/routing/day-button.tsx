import { AnimatedButton } from "@/components/ui/button";
import { DayTypes, formatDay } from "@/units/date";
import React, { memo } from "react";
import { Text, View } from "react-native";

interface DayButtonProps {
    item: {
        day: DayTypes;
        date: {
            day: string;
        };
    };
    isSelected: boolean;
    onPress: (day: DayTypes) => void;
}

const DayButton = memo(function DayButton({
    item,
    isSelected,
    onPress,
}: DayButtonProps) {

    const handlePress = React.useCallback(() => {
        onPress(item.day);
    }, [item.day, onPress]);

    const formattedDay = React.useMemo(() =>
        formatDay(item.day),
        [item.day]
    );

    return (
        <AnimatedButton
            onPress={handlePress}
            className="flex-1 mx-1"
        >
            <View
                className="w-full h-full rounded-3xl items-center justify-center"
                style={{
                    backgroundColor: isSelected ? "#000000" : "#FFFFFF",
                    transform: [{ scale: isSelected ? 0.95 : 1 }]
                }}
            >
                <Text
                    className="font-inter-semibold text-sm"
                    style={{ color: isSelected ? "#FFFFFF" : "#000000" }}
                >
                    {formattedDay}
                </Text>
                <Text
                    className="font-inter text-sm"
                    style={{ color: isSelected ? "#FFFFFF" : "#6B7280" }}
                >
                    {item.date.day}
                </Text>
            </View>
        </AnimatedButton>
    );
});

export default DayButton;