import FontProvider from "@/providers/font";
import {Stack} from "expo-router";
import "./global.css";
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <FontProvider>
                <Stack>
                    <Stack.Screen name={"(tabs)"} options={{
                        headerShown: false,
                        animation: "fade"
                    }}/>
                </Stack>
            </FontProvider>
        </SafeAreaProvider>
    );
}
