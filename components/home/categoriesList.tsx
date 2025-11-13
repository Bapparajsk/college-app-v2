import { FlashList } from "@shopify/flash-list";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import CategoriesCard from "./categoriesCard";


export default function CategoriesList() {
    return (
        <View className="relative">
            <FlashList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => <CategoriesCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 10 }}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                bounces={false}
            />
            <LinearGradient
                pointerEvents="none"
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                colors={["rgba(255, 255, 255, 0)", "#e4f2f7"]}
                className="w-4 h-52 absolute right-0 top-0"
            />

            <LinearGradient
                pointerEvents="none"
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={["rgba(255, 255, 255, 0)", "#e4f2f7"]}
                className="w-4 h-52 absolute left-0 top-0"
            />
        </View>
    )
}

