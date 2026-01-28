import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';
import { LucideIcon, SigmaIcon } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { AnimatedButton } from '../ui/button';
import { If } from '../ui/if';


const topics:
    {
        id: string;
        name: string;
        Icon: LucideIcon
    }[] = [
        {
            id: '1',
            name: 'Mathematics',
            Icon: SigmaIcon
        },
        {
            id: '2',
            name: 'Physics',
            Icon: SigmaIcon
        },
        {
            id: '3',
            name: 'Chemistry',
            Icon: SigmaIcon
        },
        {
            id: '4',
            name: 'Biology',
            Icon: SigmaIcon
        },
        {
            id: '5',
            name: 'History',
            Icon: SigmaIcon
        },
        {
            id: '6',
            name: 'Geography',
            Icon: SigmaIcon
        },
        {
            id: '7',
            name: 'Literature',
            Icon: SigmaIcon
        }
    ]


export default function TopicBar() {

    const [showLeftGradient, setShowLeftGradient] = useState(false);
    const [showRightGradient, setShowRightGradient] = useState(true);
    const scrollViewRef = useRef(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const scrollX = contentOffset.x;
        const containerWidth = layoutMeasurement.width;
        const contentWidth = contentSize.width;

        // Show left gradient if scrolled to the right
        setShowLeftGradient(scrollX > 0);

        // Show right gradient if not at the end
        setShowRightGradient(scrollX + containerWidth < contentWidth - 10);
    };

    return (
        <View className="relative">
            <FlashList
                ref={scrollViewRef}
                data={topics}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <AnimatedButton>
                        <View className='px-4 py-2 bg-gray-200 rounded-full flex-row gap-1 mr-1.5'>
                            <item.Icon size={18} color="black" />
                            <Text className="text-base font-poppins-medium text-gray-700">
                                {item.name}
                            </Text>
                        </View>
                    </AnimatedButton>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            />

            <If condition={showLeftGradient} >
                <LinearGradient
                    colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 20,
                        pointerEvents: 'none',
                    }}
                />
            </If>

            <If condition={showRightGradient} >
                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 20,
                        pointerEvents: 'none',
                    }}
                />
            </If>

        </View>
    )
}