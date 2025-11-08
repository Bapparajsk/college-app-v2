import { gradient } from "@/theme/linear-gradients";
import { LinearGradient, } from "expo-linear-gradient";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoutingPage() {
    return (
        <LinearGradient
            className={"flex-1"}
            colors={gradient.HomePage}
        >
            <SafeAreaView className={"flex-1"}>
                <Text>

                    Routing Page
                </Text>

            </SafeAreaView>
        </LinearGradient>
    );
}
