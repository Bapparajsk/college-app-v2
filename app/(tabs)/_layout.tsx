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
            <Tabs.Screen name="(home)" options={{ title: "Home", animation: "shift" }} />
            <Tabs.Screen name="routing" options={{ title: "Routing", animation: "none" }}/>
            <Tabs.Screen name="community" options={{ title: "Community", animation: "none" }}/>
            <Tabs.Screen name="setting" options={{ title: "Setting", animation: "shift" }}/>
        </Tabs>
    );
} 