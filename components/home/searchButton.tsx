import { Link } from "expo-router";
import { SearchIcon } from "lucide-react-native";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import Button from "../ui/button";

export default function SearchButton() {
    const texts = [
        "Search for courses, topics, or keywords...",
        "Find your next favorite subject...",
        "Explore new learning opportunities...",
        "Discover courses tailored for you...",
        "Uncover topics that spark your interest..."
    ];


    return (
        <View className="w-full h-20 py-2 items-center justify-center">
            <Link href={"/search"} asChild>
                <Button
                    className="size-full rounded-full "
                >
                    {({ pressed }) => {
                        return (
                            <Animated.View
                                className="size-full rounded-full bg-[#EFF7F6] border border-gray-300" 
                                style={[
                                    {
                                        backgroundColor: pressed ? '#e1dfdf' : '#EFF7F6',
                                    },
                                ]}
                            >
                                <View className="h-full flex-row gap-2 items-center justify-start px-4">
                                    <SearchIcon size={23} color="#6B7280" />
                                    <View className="w-full h-6 overflow-hidden justify-center">
                                        <View className="flex-row items-center">
                                            <Text
                                                className="font-poppins-medium text-base text-gray-500"
                                                numberOfLines={1}
                                            >
                                                {texts[Math.floor(Math.random() * texts.length)]}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </Animated.View>
                        );
                    }}
                </Button>
            </Link>
        </View>
    );
}