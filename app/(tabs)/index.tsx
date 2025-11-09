import Header from "@/components/header/header";
import Carousel from "@/components/ui/enhancedCarousel";
import { gradient } from "@/theme/linear-gradients";
import { shadows } from "@/theme/shadow";
import { LinearGradient, } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {


    const images = [
        "https://img.freepik.com/premium-photo/surveyors-action-urban-development-scene_1168612-310686.jpg",
        "https://img.freepik.com/premium-photo/cartoonstyled-engineer-wearing-yellow-helmet-working-complex-array-electrical-panels-wiring-control-room-with-various-circuit-components-tools_124507-312522.jpg",
        "https://media.istockphoto.com/id/1768414390/vector/design-studio-concept-designers-create-content-for-the-website-graphic-elements-choose.jpg?s=612x612&w=0&k=20&c=kue7rxmSWJR43wWC4zmLOC2DpefS-62F6Dec1s1sI-0=",
        "https://i.ebayimg.com/images/g/SwsAAOSwPW9dBSs7/s-l1600.jpg",
    ];

    return (
        <LinearGradient
            className={"flex-1"}
            colors={gradient.HomePage}
        >
            <SafeAreaView className={"flex-1"}>
                <Header />
                <ScrollView className="px-3 py-4 gap-2">
                    <View className="w-full h-72">
                        <View
                            className="size-full rounded-3xl overflow-hidden"
                            style={shadows.lg}
                        >
                            <Carousel images={images} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
