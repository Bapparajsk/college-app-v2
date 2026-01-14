import InputButton from "@/components/community/input-button";
import Header from "@/components/header/header";
import { communityTestData } from "@/data/data";
import { FlashList } from "@shopify/flash-list";
import { Image, ScrollView, Text, View } from "react-native";
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
                <View className="w-full h-screen mt-6">
                    <FlashList
                        data={[1]}
                        renderItem={() => (
                            <View className="w-full h-auto flex-row items-start justify-between">
                                <View className="w-1/6 items-center">
                                    <View className="size-14 overflow-hidden rounded-full border border-gray-300">
                                        <Image
                                            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/013/511/375/non_2x/confident-and-inspired-handsome-young-businessman-looking-at-camera-while-holding-hand-on-chin-and-standing-against-grey-background-free-photo.JPG' }}
                                            className="w-full h-full"
                                        />
                                    </View>
                                </View>
                                <View className="w-5/6 h-auto bg-gray-300 rounded-2xl p-2">
                                    <Text className="text-lg font-poppins-semibold mb-1">
                                        John Doe
                                    </Text>
                                    <Text className="text-base font-poppins leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Text>
                                    <View className="items-end">
                                        <Text className="text-sm font-poppins-regular text-gray-600 mt-2">
                                            2 hours ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                {/* <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/> */}
            </ScrollView>
        </SafeAreaView>
    );
}
