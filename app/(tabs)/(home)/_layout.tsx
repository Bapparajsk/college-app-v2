import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name={"index"} options={{ 
                headerShown: false, animation: "slide_from_bottom" }} />
            <Stack.Screen name={"search"} options={{ headerShown: false, animation: "slide_from_bottom" ,presentation: "modal" }} />
        </Stack>
    );
}
