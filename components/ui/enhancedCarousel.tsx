import React, { forwardRef, ReactNode, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";

const EnhancedCarousel = forwardRef(({items}: {items?: ReactNode[]}, ref) => {
    const scaleAnimations = useRef<Animated.Value[]>([]);
    const pagerRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const autoScrollTimer = useRef<number | null>(null);
    
    const AUTO_SCROLL_INTERVAL = 3000;

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
        goToPage: (page: number) => {
            if (pagerRef.current && items && page >= 0 && page < items.length) {
                pagerRef.current.setPage(page);
            }
        },
        nextPage: () => {
            if (pagerRef.current && items) {
                const nextPage = (currentPage + 1) % items.length;
                pagerRef.current.setPage(nextPage);
            }
        },
        previousPage: () => {
            if (pagerRef.current && items) {
                const prevPage = (currentPage - 1 + items.length) % items.length;
                pagerRef.current.setPage(prevPage);
            }
        }
    }));

    // Initialize animations
    useEffect(() => {
        if (items) {
            scaleAnimations.current = items.map(() => new Animated.Value(1));
        }
        setCurrentPage(0);
    }, [items]);

    // Auto-scroll effect
    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [currentPage, items]);

    const startAutoScroll = () => {
        stopAutoScroll();
        if (!items || items.length <= 1) return;
        
        autoScrollTimer.current = setTimeout(() => {
            const nextPage = (currentPage + 1) % items.length;
            if (pagerRef.current) {
                pagerRef.current.setPage(nextPage);
            }
        }, AUTO_SCROLL_INTERVAL);
    };

    const stopAutoScroll = () => {
        if (autoScrollTimer.current) {
            clearTimeout(autoScrollTimer.current);
            autoScrollTimer.current = null;
        }
    };

    const handlePageScroll = (e: any) => {
        const { position, offset } = e.nativeEvent;
        
        if (scaleAnimations.current[position]) {
            const scale = 1 - Math.abs(offset) * 0.1;
            scaleAnimations.current[position].setValue(scale);
        }

        const adjacentPage = position + (offset > 0 ? 1 : -1);
        if (scaleAnimations.current[adjacentPage]) {
            const adjacentScale = 0.9 + Math.abs(offset) * 0.1;
            scaleAnimations.current[adjacentPage].setValue(adjacentScale);
        }
    };

    const handlePageSelected = (e: any) => {
        const { position } = e.nativeEvent;
        setCurrentPage(position);
        
        scaleAnimations.current.forEach((anim, index) => {
            if (anim && index !== position) {
                Animated.spring(anim, {
                    toValue: 1,
                    useNativeDriver: true,
                }).start();
            }
        });

        if (scaleAnimations.current[position]) {
            Animated.sequence([
                Animated.spring(scaleAnimations.current[position], {
                    toValue: 1.05,
                    useNativeDriver: true,
                }),
                Animated.spring(scaleAnimations.current[position], {
                    toValue: 1,
                    useNativeDriver: true,
                })
            ]).start();
        }
    };

    const goToPage = (page: number) => {
        if (pagerRef.current && items && page >= 0 && page < items.length) {
            pagerRef.current.setPage(page);
        }
    };

    const getScaleAnimation = (index: number) => {
        return scaleAnimations.current[index] || new Animated.Value(1);
    };

    if (!items || items.length === 0) {
        return (
            <View style={[styles.container, styles.placeholder]}>
                <View style={styles.placeholderContent} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <PagerView 
                ref={pagerRef}
                style={styles.pager} 
                initialPage={0}
                onPageScroll={handlePageScroll}
                onPageSelected={handlePageSelected}
            >
                {items.map((items, index) => (
                    <View key={index} style={styles.page}>
                        <Animated.View 
                            style={[ 
                                styles.imageContainer,
                                {
                                    transform: [{ scale: getScaleAnimation(index) }]
                                }
                            ]}
                        >
                            {items}
                        </Animated.View>
                    </View>
                ))}
            </PagerView>
            {items.length > 1 && (
                <>
                    <View style={styles.pagination}>
                        {items.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.paginationDot,
                                    currentPage === index ? styles.paginationDotActive : styles.paginationDotInactive
                                ]}
                                onPress={() => goToPage(index)}
                            />
                        ))}
                    </View>
                </>
            )}
        </View>
    );
});

EnhancedCarousel.displayName = "EnhancedCarousel";

export default EnhancedCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    pager: {
        flex: 1,
        backgroundColor: '#fff',
    },
    page: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    placeholder: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderContent: {
        width: '80%',
        height: 200,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    pagination: {
        position: 'absolute',
        bottom: 5,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#ffffff',
        width: 20,
    },
    paginationDotInactive: {
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    pageIndicator: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    pageIndicatorBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    pageIndicatorText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
});