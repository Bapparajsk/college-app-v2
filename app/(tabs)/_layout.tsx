import Navbar from "@/components/navber/nav";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="(home)" options={{ title: "Home", animation: "fade" }} />
            <Tabs.Screen name="routing" options={{ title: "Routing", animation: "fade" }}/>
            <Tabs.Screen name="community" options={{ title: "Community", animation: "fade" }}/>
            <Tabs.Screen name="setting" options={{ title: "Setting", animation: "fade" }}/>
        </Tabs>
    );
} 