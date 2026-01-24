import { BottomSheetProvider } from "@/providers/bottomsheet";
import FontProvider from "@/providers/font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import "./global.css";

export default function RootLayout() {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <FontProvider>
                <GestureHandlerRootView className="flex-1">
                    <BottomSheetProvider>
                        <Stack >
                            <Stack.Screen name={"(tabs)"} options={{
                                headerShown: false,
                                animation: "fade"
                            }} />
                            <Stack.Screen name={"profile"} options={{
                                headerShown: false,
                                animation: "fade_from_bottom"
                            }} />
                            <Stack.Screen name={"college-profile"} options={{
                                headerShown: false,
                                animation: "fade"
                            }} />
                            <Stack.Screen name={"subjects"} options={{
                                headerShown: false,
                                animation: "slide_from_right"
                            }} />
                        </Stack>
                    </BottomSheetProvider>
                </GestureHandlerRootView>
            </FontProvider>
        </SafeAreaProvider>
    );
}
