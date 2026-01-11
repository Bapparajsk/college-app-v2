// BottomSheetComponents.tsx
import { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

// Basic Content Component
export const BottomSheetContent: React.FC<{
    children: React.ReactNode;
    scrollable?: boolean;
    contentContainerStyle?: any;
}> = ({ children, scrollable = false, contentContainerStyle }) => {
    if (scrollable) {
        return (
            <BottomSheetScrollView
                style={styles.container}
                contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
            >
                <View className='w-full h-auto items-center'>
                    <View className='w-20 h-1.5 bg-stone-800 rounded-full my-2' />
                </View>
                {children}
            </BottomSheetScrollView>
        );
    }

    return (
        <BottomSheetView style={[styles.container, contentContainerStyle]}>
            <View className='w-full h-auto items-center'>
                <View className='w-20 h-1.5 bg-stone-600 rounded-full my-2' />
            </View>
            {children}
        </BottomSheetView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});