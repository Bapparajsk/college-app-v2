import CommunityCard from "@/components/community/community-card";
import InputButton from "@/components/community/input-button";
import Header from "@/components/header/header";
import { communityTestData } from "@/data/data";
import { FlashList } from "@shopify/flash-list";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommunityPage() {

    return (
        <SafeAreaView className={"flex-1"}>
            <Header />
            <ScrollView className="flex-1 px-3">
                <View className="w-full h-auto mt-4 max-w-[90%] px-2">
                    <Text className="text-4xl font-poppins-semibold leading-tight">
                        {communityTestData[Math.floor(Math.random() * communityTestData.length)]}
                    </Text>
                </View>
                <View className="w-full h-auto mt-6">
                    <InputButton />
                </View>
               <FlashList
                    data={[11,2,3,4,5,6,7,8,9]}
                    renderItem={() =>  <CommunityCard/>}
                    contentContainerStyle={{paddingTop: 30, paddingBottom: 100}}
               />
            </ScrollView>
        </SafeAreaView>
    );
}
