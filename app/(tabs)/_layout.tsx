import { Link, Tabs, usePathname } from "expo-router";
import { CalendarDaysIcon, HouseIcon, MessageCircleIcon, UserRoundIcon } from "lucide-react-native";
import { useCallback } from "react";
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabs = [
    {
        name: "index",
        label: "Home",
        icon: HouseIcon,
    },
    {
        name: "routing",
        label: "Routing",
        icon: CalendarDaysIcon,
    },
    {
        name: "chat",
        label: "Chat",
        icon: MessageCircleIcon,
    },
    {
        name: "profile",
        label: "Profile",
        icon: UserRoundIcon,
    },
]

export default function TabsLayout() {
    const insets = useSafeAreaInsets();
    const pathName = usePathname();

    const isActiveRoute = useCallback((routeName: string) => {
        if (routeName === "index") {
            return pathName === "/";
        }
        return pathName === `/${routeName}`;
    }, [pathName]);

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                animation: "fade",
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    height: 80 + insets.bottom,
                    backgroundColor: "transparent",
                    elevation: 0,
                    shadowOpacity: 0,
                    borderTopWidth: 0,
                    borderBlockColor: undefined,
                    borderWidth: undefined,
                    width: '100%',
                    left: 0,
                    right: 0,
                    paddingHorizontal: 0,
                    marginHorizontal: 0,
                    paddingBottom: insets.bottom + 10,
                },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        tabBarLabel: tab.label,
                        headerShown: false,
                        tabBarButton: ({ href }) => {
                            const IconComponent = tab.icon;
                            const isActive = isActiveRoute(tab.name);
                            return (
                                <Link href={href as any} asChild>
                                    <Pressable
                                        className="flex-1 justify-center items-center h-full"
                                    >
                                        <View 
                                            style={{
                                                backgroundColor: isActive ? 'black' : 'white',
                                            }}
                                            className={`flex-row justify-center items-center px-4 py-3 rounded-full`}
                                        >
                                            <IconComponent 
                                                size={22} 
                                                color={isActive ? "white" : "black"} 
                                            />
                                            {isActive && (
                                                <Text 
                                                    className="text-white text-base font-poppins-medium ml-2"
                                                >
                                                    {tab.label}
                                                </Text>
                                            )}
                                        </View>
                                    </Pressable>
                                </Link>
                            );
                        }
                    }}
                />
            ))}
        </Tabs>
    );
}