// BottomSheetComponents.tsx
import { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
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
                {children}
            </BottomSheetScrollView>
        );
    }

    return (
        <BottomSheetView style={[styles.container, contentContainerStyle]}>
            {children}
        </BottomSheetView>
    );
};

// Header Component
export const BottomSheetHeader: React.FC<{
    title?: string;
    subtitle?: string;
    showHandle?: boolean;
    rightAction?: React.ReactNode;
}> = ({ title, subtitle, showHandle = true, rightAction }) => (
    <View style={styles.header}>
        {showHandle && <View style={styles.handle} />}
        <View style={styles.headerContent}>
            <View style={styles.headerTextContainer}>
                {title && <Text style={styles.title}>{title}</Text>}
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {rightAction && (
                <View style={styles.rightAction}>
                    {rightAction}
                </View>
            )}
        </View>
    </View>
);

// Footer Component
export const BottomSheetFooter: React.FC<{
    children: React.ReactNode;
    sticky?: boolean;
}> = ({ children, sticky = false }) => (
    <View style={[styles.footer, sticky && styles.stickyFooter]}>
        {children}
    </View>
);

// List Component
// export const BottomSheetList: React.FC<{
//     data: any[];
//     renderItem: (item: any) => React.ReactNode;
//     keyExtractor?: (item: any) => string;
//     emptyComponent?: React.ReactNode;
// }> = ({ data, renderItem, keyExtractor, emptyComponent }) => (
//     <BottomSheetFlatList
//         data={data}
//         keyExtractor={keyExtractor || ((item, index) => index.toString())}
//         renderItem={({ item }) => renderItem(item)}
//         contentContainerStyle={styles.listContainer}
//         ListEmptyComponent={emptyComponent ? () => <>{emptyComponent}</> : undefined}
//     />
// );

// // Section List Component
// export const BottomSheetSection: React.FC<{
//     sections: any[];
//     renderItem: (item: any) => React.ReactNode;
//     renderSectionHeader?: (section: any) => React.ReactNode;
//     keyExtractor?: (item: any) => string;
// }> = ({ sections, renderItem, renderSectionHeader, keyExtractor }) => (
//     <BottomSheetSectionList
//         sections={sections}
//         keyExtractor={keyExtractor || ((item, index) => index.toString())}
//         renderItem={({ item }) => renderItem(item)}
//         renderSectionHeader={({ section }) =>
//             renderSectionHeader ? renderSectionHeader(section) : null
//         }
//         contentContainerStyle={styles.listContainer}
//         stickySectionHeadersEnabled={false}
//     />
// );

// Action Item Component
export const BottomSheetActionItem: React.FC<{
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    onPress: () => void;
    destructive?: boolean;
    disabled?: boolean;
    rightComponent?: React.ReactNode;
}> = ({ icon, title, subtitle, onPress, destructive, disabled, rightComponent }) => (
    <TouchableOpacity
        style={[styles.actionItem, disabled && styles.disabled]}
        onPress={onPress}
        disabled={disabled}
    >
        {icon && <View style={styles.actionIcon}>{icon}</View>}
        <View style={styles.actionContent}>
            <Text style={[
                styles.actionTitle,
                destructive && styles.destructiveText,
                disabled && styles.disabledText
            ]}>
                {title}
            </Text>
            {subtitle && (
                <Text style={[styles.actionSubtitle, disabled && styles.disabledText]}>
                    {subtitle}
                </Text>
            )}
        </View>
        {rightComponent && (
            <View style={styles.rightComponent}>
                {rightComponent}
            </View>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: '#D1D5DB',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 12,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 4,
    },
    rightAction: {
        marginLeft: 16,
    },
    footer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    stickyFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    actionIcon: {
        marginRight: 12,
    },
    actionContent: {
        flex: 1,
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#111827',
    },
    actionSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 2,
    },
    rightComponent: {
        marginLeft: 8,
    },
    destructiveText: {
        color: '#DC2626',
    },
    disabled: {
        opacity: 0.5,
    },
    disabledText: {
        color: '#9CA3AF',
    },
});