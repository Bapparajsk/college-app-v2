import Header from "@/components/header/header";
import HeroCard from "@/components/home/heroCard";
import SearchButton from "@/components/home/searchButton";
import { gradient } from "@/theme/linear-gradients";
import { LinearGradient, } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {

    return (
        <LinearGradient
            className={"flex-1"}
            colors={gradient.HomePage}
        >
            <SafeAreaView className={"flex-1"}>
                <Header />
                <ScrollView className="px-3 py-4" contentContainerStyle={{ gap: 12 }}>
                    <SearchButton/>
                    <HeroCard/>
                    <View>
                        <Text className="font-poppins-semibold text-2xl">
                            Dashboard
                        </Text>
                    </View>
                    {/* <View className="w-full h-52 flex-row px-2">
                        <View className="w-1/2 pr-3">
                            <View className="size-full">
                                <LinearGradient
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={["#7bdff2", "#88e5f1", "#96ebf0", "#a4f1ef", "#b2f7ef"]}
                                    className="size-full rounded-3xl justify-center items-center overflow-hidden"
                                    style={shadows.md}
                                >
                                    <Text className="text-white font-poppins-semibold text-lg">
                                        slfj
                                    </Text>
                                </LinearGradient>
                            </View>
                        </View>
                        <View className="w-1/2 pl-3">
                            <View className="size-full">
                                <LinearGradient
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={["#f7d6e0", "#f7cedc", "#f6c5d9", "#f4bdd6", "#f2b5d4"]}
                                    className="size-full rounded-3xl justify-center items-center overflow-hidden"
                                    style={shadows.md}
                                >
                                    <Text>
                                        slfj
                                    </Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </View> */}
                </ScrollView>
            </SafeAreaView >
        </LinearGradient >
    );
}

// 
