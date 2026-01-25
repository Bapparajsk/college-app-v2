import { shadows } from '@/theme/shadow';
import { cn } from '@/units/cn';
import { BellIcon, ChevronLeftIcon, FunnelIcon, SearchIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle, useDerivedValue, withSpring } from 'react-native-reanimated';
import { AnimatedButton } from '../ui/button';
import If from '../ui/if';
import TopicBar from './topic-bar';

type HeaderProps = {
    scrollY?: SharedValue<number>;
    onlySearch?: boolean;
}

export default function Header({ scrollY, onlySearch }: HeaderProps) {

    // Alternative: If you want a fixed header that appears on scroll
    const animatedTranslateY = useDerivedValue(() => {
        if (!scrollY) return 0;
        return withSpring(
            interpolate(scrollY.value, [400, 600], [-250, 0], Extrapolation.CLAMP),
            {
                damping: 15,
                stiffness: 120,
                mass: 0.3,
                overshootClamping: true
            }
        );
    });

    const headerStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: animatedTranslateY.value }],
    }));


    return (
        <Animated.View
            style={[headerStyle]}
            className={cn("bg-white px-3 pt-10 pb-3", !onlySearch && "absolute top-0 left-0 right-0 border-b border-gray-200")}
        >
            <If condition={!onlySearch} >
                <View className="flex-row items-center justify-between mt-2 mb-3">
                    <AnimatedButton>
                        <View
                            className='size-20 rounded-full bg-stone-200/70 items-center justify-center'
                        >
                            <ChevronLeftIcon size={30} color="black" />
                        </View>
                    </AnimatedButton>
                    <View>
                        <Text className="text-3xl font-poppins-semibold">
                            Subject
                        </Text>
                    </View>
                    <AnimatedButton>
                        <View
                            className='size-20 rounded-full bg-black items-center justify-center'
                            style={shadows.md}
                        >
                            <BellIcon size={30} color={"white"} />
                        </View>
                    </AnimatedButton>
                </View>
            </If>
            <AnimatedButton>
                <View className="w-full h-[4.5rem] flex-row bg-gray-300/70 p-2 rounded-full items-center justify-between gap-1">
                    <View className="flex-grow h-auto flex-1 flex-row items-center px-4 py-2">
                        <SearchIcon size={22} color="gray" />
                        <Text className="text-gray-500 ml-2 font-poppins-medium text-xl">Search</Text>
                    </View>
                    <AnimatedButton>
                        <View className="p-4 bg-white rounded-full flex-row items-center justify-center">
                            <FunnelIcon color="black" size={22} />
                        </View>
                    </AnimatedButton>
                </View>
            </AnimatedButton>
            <If condition={!onlySearch} >
                <View className='mt-3'>
                    <TopicBar />
                </View>
            </If>
        </Animated.View>
    )
}