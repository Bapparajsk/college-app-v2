import Header from "@/components/header/header";
import CategoriesList from "@/components/home/categoriesList";
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
                <ScrollView className="py-4" contentContainerStyle={{ gap: 12 }}>
                    <View className="px-4">
                        <SearchButton />
                        <HeroCard />
                        <View>
                            <Text className="font-poppins-semibold text-2xl">
                                Categories
                            </Text>
                        </View>
                    </View>

                    <CategoriesList />
                </ScrollView>
            </SafeAreaView >
        </LinearGradient >
    );
}

// 
