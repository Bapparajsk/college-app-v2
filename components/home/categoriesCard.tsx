// components/AnimatedProjectCard.tsx
import { categoryThemes, getCategoryDisplayName } from '@/theme/category-themes';
import { ProjectCardProps } from '@/types/project';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const AnimatedProjectCard: React.FC<ProjectCardProps> = ({ project, onExplore }) => {
    const theme = categoryThemes[project.category];

    // Animation values
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.9)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const hoverAnim = useRef(new Animated.Value(0)).current;

    // Card entrance animation
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
                easing: Easing.out(Easing.cubic)
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.out(Easing.back(1.5))
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.out(Easing.cubic)
            })
        ]).start();
    }, []);

    // Hover animation handlers
    const handleHoverIn = () => {
        Animated.spring(hoverAnim, {
            toValue: 1,
            friction: 8,
            tension: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleHoverOut = () => {
        Animated.spring(hoverAnim, {
            toValue: 0,
            friction: 8,
            tension: 300,
            useNativeDriver: true,
        }).start();
    };

    // Button press animation
    const buttonScale = useRef(new Animated.Value(1)).current;

    const handleButtonPressIn = () => {
        Animated.spring(buttonScale, {
            toValue: 0.95,
            friction: 8,
            tension: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleButtonPressOut = () => {
        Animated.spring(buttonScale, {
            toValue: 1,
            friction: 8,
            tension: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleExplorePress = () => {
        // Button press animation sequence
        Animated.sequence([
            Animated.timing(buttonScale, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(buttonScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            })
        ]).start(() => {
            onExplore(project.id);
        });
    };

    // Interpolate hover animations
    const cardScale = hoverAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.02]
    });


    return (
        <Animated.View
            style={{
                opacity: fadeAnim,
                transform: [
                    { scale: scaleAnim },
                    { translateY: slideAnim },
                    { scale: cardScale }
                ],
            }}   
        >
            <TouchableOpacity
                activeOpacity={0.9}
                onPressIn={handleHoverIn}
                onPressOut={handleHoverOut}
            >
                <View
                    className={"rounded-2xl p-6 bg-white"}
                >
                    {/* Header with Animated Category Badge */}
                    <View className="flex-row justify-between items-start mb-4">
                        <View className="flex-1 pr-2">
                            <Text className="text-2xl font-light text-gray-800 mb-1">
                                {project.name}
                            </Text>

                            {/* Technologies Pill */}
                            <View className="flex-row flex-wrap mt-2">
                                {project.technologies.slice(0, 2).map((tech, index) => (
                                    <Animated.View
                                        key={index}
                                        style={{
                                            opacity: fadeAnim,
                                            transform: [{
                                                translateX: slideAnim.interpolate({
                                                    inputRange: [0, 50],
                                                    outputRange: [0, -20 * (index + 1)]
                                                })
                                            }]
                                        }}
                                        className={`px-3 py-1 rounded-full mr-2 mb-1 bg-gray-50`}
                                    >
                                        <Text className="text-xs text-gray-600 font-medium">
                                            {tech}
                                        </Text>
                                    </Animated.View>
                                ))}
                            </View>
                        </View>

                        {/* Category Badge with Animation */}
                        <Animated.View
                            style={{
                                transform: [{
                                    scale: fadeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.5, 1]
                                    })
                                }]
                            }}
                            className={`px-4 py-2 rounded-full border ${theme.backgroundColor} ${theme.borderColor}`}
                        >
                            <Text className={`text-sm font-semibold ${theme.textColor}`}>
                                {theme.icon}
                            </Text>
                        </Animated.View>
                    </View>

                    {/* Description with Fade Animation */}
                    <Animated.View
                        style={{
                            opacity: fadeAnim,
                            transform: [{
                                translateY: slideAnim.interpolate({
                                    inputRange: [0, 50],
                                    outputRange: [0, 10]
                                })
                            }]
                        }}
                    >
                        <Text className="text-gray-600 text-base leading-6 mb-5 font-light">
                            {project.description}
                        </Text>
                    </Animated.View>

                    {/* Additional Technologies with Stagger Animation */}
                    <View className="flex-row flex-wrap mb-6">
                        {project.technologies.slice(2, 5).map((tech, index) => (
                            <Animated.View
                                key={index}
                                style={{
                                    opacity: fadeAnim,
                                    transform: [{
                                        scale: fadeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.8, 1]
                                        })
                                    }],
                                    marginLeft: index > 0 ? 8 : 0
                                }}
                                className={`px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200`}
                            >
                                <Text className="text-xs text-gray-500">
                                    {tech}
                                </Text>
                            </Animated.View>
                        ))}
                        {project.technologies.length > 5 && (
                            <Animated.View
                                style={{ opacity: fadeAnim }}
                                className="px-3 py-1.5 rounded-lg bg-gray-100 ml-2"
                            >
                                <Text className="text-xs text-gray-400">
                                    +{project.technologies.length - 5}
                                </Text>
                            </Animated.View>
                        )}
                    </View>

                    {/* Footer with Animated Button */}
                    <View className="flex-row justify-between items-center pt-4 border-t border-gray-100">
                        <View className="flex-row items-center">
                            {project.featured && (
                                <Animated.View
                                    style={{
                                        opacity: fadeAnim,
                                        transform: [{
                                            scale: fadeAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0.5, 1]
                                            })
                                        }]
                                    }}
                                    className="bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200"
                                >
                                    <Text className="text-amber-700 text-xs font-medium">✨ Featured</Text>
                                </Animated.View>
                            )}

                            <Animated.Text
                                style={{ opacity: fadeAnim }}
                                className="text-gray-400 text-sm ml-3"
                            >
                                {getCategoryDisplayName(project.category)}
                            </Animated.Text>
                        </View>

                        <Animated.View
                            style={{
                                transform: [{ scale: buttonScale }]
                            }}
                        >
                            <TouchableOpacity
                                onPressIn={handleButtonPressIn}
                                onPressOut={handleButtonPressOut}
                                onPress={handleExplorePress}
                                className={`px-6 py-3 rounded-xl ${theme.buttonColor}`}
                                style={{
                                    shadowColor: theme.buttonColor,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 8,
                                    elevation: 6,
                                }}
                            >
                                <Text className="text-white font-semibold text-sm">
                                    Explore Project
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default AnimatedProjectCard;