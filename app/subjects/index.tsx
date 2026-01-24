import { AnimatedButton } from '@/components/ui/button';
import { shadows } from '@/theme/shadow';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';
import { BellIcon, ChevronLeftIcon, FunnelIcon, LucideIcon, SearchIcon, SigmaIcon } from 'lucide-react-native';
import { useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated';

// Define type for better type safety
type ImageItem = {
    id: string;
    uri: string;
};

const topics: {
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

const IMAGES: ImageItem[] = [
    {
        id: '1',
        uri: "https://static.vecteezy.com/system/resources/previews/003/689/696/non_2x/interracial-four-readers-with-books-book-day-celebration-vector.jpg",
    },
    {
        id: '2',
        uri: "https://cdni.iconscout.com/illustration/premium/thumb/business-people-working-together-illustration-download-in-svg-png-gif-file-formats--teamwork-group-employee-woman-office-and-team-works-pack-illustrations-10300302.png",
    },
    {
        id: '3',
        uri: "https://img.freepik.com/premium-vector/student-council-isolated-cartoon-vector-illustration_107173-27641.jpg"
    }
];

export default function Index() {
    const scrollY = useSharedValue(0);

    // Use useMemo to get a random image only once when component mounts
    const randomImage = useMemo(() => {
        return IMAGES[Math.floor(Math.random() * IMAGES.length)];
    }, []);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    // Alternative: If you want a fixed header that appears on scroll
    const headerStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollY.value,
            [220, 400],
            [-200, 0],
            "clamp"
        );

        return {
            transform: [{ translateY }],
            // opacity,
        };
    });

    const [showLeftGradient, setShowLeftGradient] = useState(false);
    const [showRightGradient, setShowRightGradient] = useState(true);
    const scrollViewRef = useRef(null);

    const handleScroll = (event: any) => {
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
        <View className="flex-1 bg-white">
            <Animated.ScrollView
                className="flex-1"
                onScroll={onScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {/* Image Section */}
                <View className="w-full" style={{ aspectRatio: 1 }}>
                    <Animated.Image
                        source={{ uri: randomImage.uri }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                {/* Content Section */}
                <View className="px-3 pb-8">
                    <View className="relative">
                        <FlashList
                            ref={scrollViewRef}
                            data={topics}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <AnimatedButton>
                                    <View className='px-3 py-2 bg-gray-200 rounded-3xl flex-row gap-1 mr-1.5'>
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

                        {showLeftGradient && (
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
                        )}

                        {showRightGradient && (
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
                        )}
                    </View>
                </View>
            </Animated.ScrollView>


            <Animated.View
                style={[headerStyle]}
                className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 px-3 pt-10 pb-3"
            >
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
            </Animated.View>
        </View>
    );
}