import Header from '@/components/profile/header';
import Tabs from '@/components/profile/tabs';
import UserDetails from '@/components/profile/user-details';
import { gradient } from '@/theme/linear-gradients';
import { LinearGradient } from 'expo-linear-gradient';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';

export default function Profile() {
    const scrollY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    return (
        <>
            <Header scrollY={scrollY} />

            <Animated.FlatList
                data={[0]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => (
                    <Fragment>
                        <View className="w-full">
                            <LinearGradient
                                colors={gradient["ProfilePage"]}
                                style={{ width: '100%' }}
                            >
                                <View className="px-4">
                                    <UserDetails />
                                </View>
                            </LinearGradient>
                        </View>

                        <View className="px-4 mt-3">
                            <Tabs />
                        </View>
                    </Fragment>
                )}
                onScroll={onScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingTop: 80, paddingBottom: 40, backgroundColor: '#ffffff' }}
                showsVerticalScrollIndicator={false}
            />
        </>
    );
}
