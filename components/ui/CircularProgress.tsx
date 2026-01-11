import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CircularProgressProps = {
    size?: number;
    strokeWidth?: number;
    progress?: number; // 0 - 100
    duration?: number;
    color?: string;
    bgColor?: string;
    showText?: boolean;
    textStyle?: object;
    children?: React.ReactNode;
}

export default function CircularProgress({
    size = 120,
    strokeWidth = 10,
    progress = 50, // 0 - 100
    duration = 800,
    color = '#3b82f6',
    bgColor = '#e6e6e6',
    showText = true,
    textStyle = {},
    children,
}: CircularProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const animated = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animated, {
            toValue: progress,
            duration,
            useNativeDriver: false, // strokeDashoffset animation is not supported by native driver
        }).start();
    }, [progress, duration, animated]);

    // interpolation from 0-100 to strokeDashoffset
    const strokeDashoffset = animated.interpolate({
        inputRange: [0, 100],
        outputRange: [circumference, 0],
    });

    return (
        <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center'}}>
            <Svg width={size} height={size}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={bgColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />

                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="transparent"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>

            {showText && (
                <View style={[StyleSheet.absoluteFillObject, styles.centered]} pointerEvents="none">
                    <Text style={[styles.text, textStyle]}>{children}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
    },
});