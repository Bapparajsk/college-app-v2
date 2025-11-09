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
            <Tabs.Screen name="index" options={{ title: "Home" }}/>
            <Tabs.Screen name="routing" options={{ title: "Routing" }}/>
            <Tabs.Screen name="chat" options={{ title: "Chat" }}/>
            <Tabs.Screen name="profile" options={{ title: "Profile" }}/>
        </Tabs>
    );
}