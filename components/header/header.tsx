import { buttonVariants } from "@/theme/theme";
import { BellIcon, KanbanIcon } from "lucide-react-native";
import { Image, View } from "react-native";
import Button, { ButtonWrapper } from "../ui/button";

export default function Header() {
    return (
        <View className="w-full px-5 h-20 justify-center items-center">
            <View className="w-full h-16 flex-row justify-between items-center">
                <Button
                    className="size-16 rounded-full"
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
                <View className="flex-row gap-2 h-full w-auto justify-center items-center">
                    <Button
                        className="size-16 rounded-full"
                    >
                        {({ pressed, hovered }) => {
                            const buttonColors = buttonVariants.default;
                            return (
                                <ButtonWrapper hovered={hovered} pressed={pressed}>
                                    <BellIcon
                                        size={24}
                                        color={buttonColors.text}
                                    />
                                </ButtonWrapper>
                            )
                        }}
                    </Button>
                    <Button
                        className="size-16 rounded-full"
                    >
                        {({ pressed }) => (
                            <Image
                                className="size-full rounded-full"
                                style={{
                                    opacity: pressed ? 0.7 : 1,
                                }}
                                source={{ uri: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" }}
                                resizeMode="cover"
                            />
                        )}
                    </Button>
                </View>
            </View>
        </View>
    );
}