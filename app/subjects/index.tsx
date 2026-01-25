import Header from '@/components/subjects/header';
import HeroBar from '@/components/subjects/hero-bar';
import TopicBar from '@/components/subjects/topic-bar';
import { View } from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue
} from 'react-native-reanimated';

export default function Index() {

    const scrollY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    return (
        <View className="flex-1 bg-white">
            <Animated.ScrollView
                className="flex-1"
                onScroll={onScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {/* Image Section */}
                <HeroBar />

                <Header onlySearch />

                {/* Content Section */}
                <View className="px-3 pb-8">
                    <TopicBar/>
                    <View className='w-full h-[600vh]'>

                    </View>
                </View>

            </Animated.ScrollView>

            <Header scrollY={scrollY} />
        </View>
    );
}