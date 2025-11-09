import { shadows } from "@/theme/shadow";
import { KanbanIcon } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function Header() {
    return (
        <View className="w-full px-5 h-20 justify-center items-center">
            <View className="w-full h-16 flex-row justify-between items-center ">
                <Pressable style={({ pressed }) => [
                    {
                        width: 64,
                        height: 64,
                        borderRadius: Infinity - 1,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: pressed ? [{ scale: 0.95 }] : [],
                    },
                    shadows.md
                ]} className="size-16 rounded-full  justify-center items-center bg-white">
                    <View style={{
                        transform: [{ rotate: '-90deg' }],
                    }}>
                        <KanbanIcon size={28} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}