import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name={"index"} options={{
                headerShown: false,
                animation: "slide_from_right"
            }} />
             <Stack.Screen name={"[subject]/index"} options={{
                headerShown: false,
                animation: "fade_from_bottom"
            }} />
        </Stack>
    );
}
