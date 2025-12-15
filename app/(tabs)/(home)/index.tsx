import Header from "@/components/header/header";
import CategoriesList from "@/components/home/categoriesList";
import HeroCard from "@/components/home/heroCard";
import UserProgressHeader from "@/components/home/user-progress-header";
import { gradient } from "@/theme/linear-gradients";
import { FlashList } from "@shopify/flash-list";
import { LinearGradient, } from "expo-linear-gradient";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
    return (
        <LinearGradient
            className={"flex-1"}
            colors={gradient.HomePage}
        >
            <SafeAreaView className={"flex-1"}>
                <Header />
                <FlashList
                    ListHeaderComponent={
                        <View className="px-4">
                            <UserProgressHeader/>
                            <HeroCard />
                        </View>
                    }
                    data={[0]}
                    renderItem={() => <CategoriesList />}
                    contentContainerStyle={{ paddingBottom: 80 }}
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

// 
