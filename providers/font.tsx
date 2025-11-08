import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, ReactNode } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function FontProvider({ children }: { children: ReactNode }) {
    const [fontsLoaded] = useFonts({
        // Poppins

        PoppinsThin: require("&/poppins/Poppins-Thin.ttf"),
        PoppinsLight: require("&/poppins/Poppins-Light.ttf"),
        PoppinsItalic: require("&/poppins/Poppins-Italic.ttf"),
        PoppinsRegular: require("&/poppins/Poppins-Regular.ttf"),
        PoppinsMedium: require("&/poppins/Poppins-Medium.ttf"),
        PoppinsSemiBold: require("&/poppins/Poppins-SemiBold.ttf"),
        PoppinsBold: require("&/poppins/Poppins-Bold.ttf"),
        PoppinsExtraBold: require("&/poppins/Poppins-ExtraBold.ttf"),

        // Inter
        InterThin: require("&/inter/Inter-Thin.ttf"),
        InterLight: require("&/inter/Inter-Light.ttf"),
        InterItalic: require("&/inter/Inter-Italic.ttf"),
        InterRegular: require("&/inter/Inter-Regular.ttf"),
        InterMedium: require("&/inter/Inter-Medium.ttf"),
        InterSemiBold: require("&/inter/Inter-SemiBold.ttf"),
        InterBold: require("&/inter/Inter-Bold.ttf"),
        InterExtraBold: require("&/inter/Inter-ExtraBold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            {children}
        </View>
    );
}