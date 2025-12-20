import FontProvider from "@/providers/font";
import { Stack } from "expo-router";
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import "./global.css";

export default function RootLayout() {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <FontProvider>
                <Stack >
                    <Stack.Screen name={"(tabs)"} options={{
                        headerShown: false,
                        animation: "fade"
                    }}/>
                    <Stack.Screen name={"profile"} options={{
                        headerShown: false,
                        animation: "fade_from_bottom"
                    }}/>
                    <Stack.Screen name={"college-profile"} options={{
                        headerShown: false,
                        animation: "slide_from_right"
                    }}/>
                </Stack>
            </FontProvider>
        </SafeAreaProvider>
    );
}
