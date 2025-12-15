import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SquircleProps {
    width: number;
    height: number;
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    curvature?: number; // 0-1, where 1 is most curved
    style?: ViewStyle;
    children?: React.ReactNode;
}

const Squircle: React.FC<SquircleProps> = ({
    width,
    height,
    color,
    borderColor = 'transparent',
    borderWidth = 0,
    curvature = 0.6,
    style,
}) => {
    // Superellipse formula for squircle
    const squirclePath = () => {
        const w = width;
        const h = height;

        // Superellipse formula
        const createPath = (offset = 0) => {
            const wi = w - offset * 2;
            const hi = h - offset * 2;
            const halfWi = wi / 2;
            const halfHi = hi / 2;
            const centerX = halfWi + offset;
            const centerY = halfHi + offset;

            // Create squircle using multiple bezier curves for approximation
            const c = 0.5 * (1 - curvature);

            return `
                M ${offset}, ${centerY}
                C ${offset}, ${centerY - halfHi * c} 
                ${centerX - halfWi * c}, ${offset} 
                ${centerX}, ${offset}
                C ${centerX + halfWi * c}, ${offset} 
                ${w - offset}, ${centerY - halfHi * c} 
                ${w - offset}, ${centerY}
                C ${w - offset}, ${centerY + halfHi * c} 
                ${centerX + halfWi * c}, ${h - offset} 
                ${centerX}, ${h - offset}
                C ${centerX - halfWi * c}, ${h - offset} 
                ${offset}, ${centerY + halfHi * c} 
                ${offset}, ${centerY}
                Z
            `;
        };

        return { fillPath: createPath(0), borderPath: createPath(borderWidth / 2) };
    };

    const paths = squirclePath();

    return (
        <View style={[styles.container, style, { width, height, transform: [{ rotate: "45deg" }] }]}>
            <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                {/* Fill */}
                <Path d={paths.fillPath} fill={color} />
                {/* Border */}
                {borderWidth > 0 && (
                    <Path
                        d={paths.borderPath}
                        fill="transparent"
                        stroke={borderColor}
                        strokeWidth={borderWidth}
                    />
                )}

            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
});

export default Squircle;