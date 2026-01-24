import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type GradientStop = {
    offset: string;
    color: string;
};

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
    // Gradient Props
    gradient?: {
        startColor: string;
        endColor: string;
    } | {
        stops: GradientStop[];
    };
    // Animation Props
    animateFromValue?: number;
    easing?: (value: number) => number;
    // Additional Props
    rotation?: number; // Starting angle in degrees
    roundedStroke?: boolean;
    onAnimationComplete?: () => void;
}

export default function CircularProgress({
    size = 120,
    strokeWidth = 10,
    progress = 50,
    duration = 800,
    color = '#3b82f6',
    bgColor = '#e6e6e6',
    showText = true,
    textStyle = {},
    children,
    gradient,
    animateFromValue = 0,
    easing,
    rotation = -90, // Start from top (12 o'clock position)
    roundedStroke = true,
    onAnimationComplete,
}: CircularProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = size / 2;

    const animatedProgress = useRef(new Animated.Value(animateFromValue)).current;
    const animationRef = useRef<Animated.CompositeAnimation | null>(null);

    // Generate unique ID for gradient to avoid conflicts
    const gradientId = useRef(`gradient-${Math.random().toString(36).substr(2, 9)}`).current;

    useEffect(() => {
        // Cancel any ongoing animation
        if (animationRef.current) {
            animationRef.current.stop();
        }

        const config: Animated.TimingAnimationConfig = {
            toValue: progress,
            duration,
            useNativeDriver: false,
        };

        if (easing) {
            config.easing = easing;
        }

        animationRef.current = Animated.timing(animatedProgress, config);

        animationRef.current.start(({ finished }) => {
            if (finished && onAnimationComplete) {
                onAnimationComplete();
            }
        });

        return () => {
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [progress, duration, animateFromValue, easing, animatedProgress, onAnimationComplete]);

    const strokeDashoffset = animatedProgress.interpolate({
        inputRange: [0, 100],
        outputRange: [circumference, 0],
    });

    // Calculate text to display
    const displayText = children !== undefined ? children : `${Math.round(progress)}%`;

    // Render gradient definition
    const renderGradient = () => {
        if (!gradient) return null;

        if ('stops' in gradient) {
            return (
                <LinearGradient
                    id={gradientId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                    gradientTransform={`rotate(${rotation} ${center} ${center})`}
                >
                    {gradient.stops.map((stop, index) => (
                        <Stop key={index} offset={stop.offset} stopColor={stop.color} />
                    ))}
                </LinearGradient>
            );
        }

        return (
            <LinearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientTransform={`rotate(${rotation} ${center} ${center})`}
            >
                <Stop offset="0%" stopColor={gradient.startColor} />
                <Stop offset="100%" stopColor={gradient.endColor} />
            </LinearGradient>
        );
    };

    // Get stroke color or gradient
    const getStrokeColor = () => {
        if (gradient) {
            return `url(#${gradientId})`;
        }
        return color;
    };

    return (
        <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <Svg width={size} height={size}>
                <Defs>
                    {renderGradient()}
                </Defs>

                {/* Background Circle */}
                <Circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={bgColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    opacity={0.2}
                />

                {/* Progress Circle */}
                <AnimatedCircle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={getStrokeColor()}
                    strokeWidth={strokeWidth}
                    strokeLinecap={roundedStroke ? 'round' : 'butt'}
                    fill="transparent"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    transform={`rotate(${rotation} ${center} ${center})`}
                />
            </Svg>

            {showText && (
                <View style={[StyleSheet.absoluteFillObject, styles.centered]} pointerEvents="none">
                    <Text style={[styles.text, textStyle]}>{displayText}</Text>
                </View>
            )}
        </View>
    );
}

// Enhanced styles
const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});
