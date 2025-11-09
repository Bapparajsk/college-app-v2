import { shadows } from "@/theme/shadow";
import { buttonVariants } from "@/theme/theme";
import { KanbanIcon } from "lucide-react-native";
import { View } from "react-native";
import Button from "../ui/button";

export default function Header() {
    return (
        <View className="w-full px-5 h-20 justify-center items-center">
            <View className="w-full h-16 flex-row justify-between items-center">
                <Button
                    style={shadows.md}
                    className="size-16"
                >
                    {({ pressed, hovered }) => {
                        const buttonColors = buttonVariants.default;
                        return (
                            <View
                                style={{
                                    transform: [{ rotate: '-90deg' }],
                                    backgroundColor: pressed ? buttonColors.pressed :
                                        hovered ? buttonColors.hovered : buttonColors.default,
                                }}
                                className="size-full justify-center items-center rounded-full"
                            >
                                <KanbanIcon
                                    size={24}
                                    color={buttonColors.text}
                                />
                            </View>
                        )
                    }}
                </Button>
            </View>
        </View>
    );
}