import { shadows } from '@/theme/shadow'
import { GraduationCapIcon } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Animated, {
    Easing,
    interpolate,
    runOnJS,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming
} from 'react-native-reanimated'
import Button, { ButtonWrapper } from '../ui/button'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedText = Animated.createAnimatedComponent(Text)
const AnimatedView = Animated.createAnimatedComponent(View)

export default function UserProgressHeader() {
    // Animation values
    const progress = useSharedValue(0)
    const scale = useSharedValue(1)
    const rotate = useSharedValue(0)
    const opacity = useSharedValue(0)
    const progressTextOpacity = useSharedValue(0)
    const containerScale = useSharedValue(0.95)
    const [animatedProgress, setAnimatedProgress] = useState(0)

    // Target progress value
    const targetProgress = 45

    // Use animated reaction to sync progress value with state
    useAnimatedReaction(
        () => progress.value,
        (currentValue) => {
            runOnJS(setAnimatedProgress)(Math.floor(currentValue))
        }
    )

    // Initialize animations
    useEffect(() => {
        // Entry animation sequence
        opacity.value = withDelay(200, withTiming(1, {
            duration: 600,
            easing: Easing.out(Easing.cubic)
        }))

        // Container scale animation
        containerScale.value = withDelay(200, withTiming(1, {
            duration: 500,
            easing: Easing.out(Easing.back(1.2))
        }))

        // Progress number animation
        progress.value = withDelay(400, withTiming(targetProgress, {
            duration: 1500,
            easing: Easing.out(Easing.cubic)
        }))

        // Text fade in
        progressTextOpacity.value = withDelay(800, withTiming(1, {
            duration: 800,
            easing: Easing.out(Easing.quad)
        }))
    }, [])

    // Container animation styles
    const containerStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [
            { scale: containerScale.value },
            { translateY: interpolate(opacity.value, [0, 1], [20, 0]) }
        ]
    }))

    // Progress percentage animation
    const progressTextStyle = useAnimatedStyle(() => ({
        opacity: progressTextOpacity.value,
        transform: [
            { scale: interpolate(progressTextOpacity.value, [0, 1], [0.8, 1]) }
        ]
    }))

    // Icon animation on press
    const iconStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
            { rotate: `${rotate.value}deg` }
        ]
    }))

    // Interactive press handler
    const handlePressIn = () => {
        scale.value = withTiming(0.92, {
            duration: 150,
            easing: Easing.in(Easing.quad)
        })
    }

    const handlePressOut = () => {
        scale.value = withTiming(1, {
            duration: 200,
            easing: Easing.out(Easing.quad)
        })

        // Add a little celebratory rotation on release
        rotate.value = withSequence(
            withTiming(5, {
                duration: 100,
                easing: Easing.out(Easing.quad)
            }),
            withTiming(-5, {
                duration: 100,
                easing: Easing.out(Easing.quad)
            }),
            withTiming(0, {
                duration: 100,
                easing: Easing.out(Easing.quad)
            })
        )
    }

    // Handle progress container press
    const handleProgressPress = () => {
        // Scale animation on press
        containerScale.value = withSequence(
            withTiming(0.98, {
                duration: 150,
                easing: Easing.in(Easing.quad)
            }),
            withTiming(1, {
                duration: 250,
                easing: Easing.out(Easing.back(1.2))
            })
        )

        // Progress increase animation (for demo)

    }

    

    return (
        <AnimatedView className='w-full h-[80px] justify-center items-center my-3'>
            <AnimatedView className='w-full h-full' style={containerStyle}>
                <AnimatedTouchable
                    activeOpacity={0.65}
                    style={[shadows.sm, containerStyle]}
                    className='w-full h-full px-4 flex-row justify-between items-center bg-[#ced4da] rounded-[30px]'
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    onPress={handleProgressPress}
                >
                    <View>
                        <View className='flex-row items-center gap-3'>
                            <AnimatedView style={iconStyle} className='size-14'>
                                <Button>
                                    {({ hovered, pressed }) => (
                                        <ButtonWrapper
                                            hovered={hovered}
                                            pressed={pressed}
                                            variant="default"
                                            rounded="full"
                                            className="px-3 py-1 rounded-full"
                                        >
                                            <GraduationCapIcon size={28} />
                                        </ButtonWrapper>
                                    )}
                                </Button>
                            </AnimatedView>
                            <View>
                                <Text className='font-poppins-semibold text-lg'>
                                    Progress
                                </Text>
                                <Text className='font-inter-medium text-gray-700'>
                                    1st Year - Semester 1
                                </Text>
                            </View>
                        </View>
                    </View>

                    <AnimatedView className='border-l-2 border-gray-400 pl-4' style={progressTextStyle}>
                        <AnimatedText className='font-poppins-semibold text-lg'>
                            <AnimatedText className='text-2xl'>
                                {animatedProgress}
                            </AnimatedText>%
                        </AnimatedText>
                        <Text className='font-inter-medium text-gray-600 text-center text-sm'>
                            best
                        </Text>
                    </AnimatedView>
                </AnimatedTouchable>
            </AnimatedView>
        </AnimatedView>
    )
}