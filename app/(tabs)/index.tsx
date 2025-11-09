import Header from "@/components/header/header";
import { gradient } from "@/theme/linear-gradients";
import { LinearGradient, } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
    return (
        <LinearGradient
            className={"flex-1"}
            colors={gradient.HomePage}
        >
            <SafeAreaView className={"flex-1"}>
                <Header/>
            </SafeAreaView>
        </LinearGradient>
    );
}
