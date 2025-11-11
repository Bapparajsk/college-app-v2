import { buttonVariants } from "@/theme/theme";
import { BellIcon, KanbanIcon, SearchIcon } from "lucide-react-native";
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
                                <ButtonWrapper rounded="full" hovered={hovered} pressed={pressed} >
                                    <SearchIcon
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
                            <View className="size-full rounded-full overflow-hidden bg-pink-500">
                                <Image
                                    className="w-full h-full"
                                    source={{ uri: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" }}
                                    resizeMode="none"
                                    // fadeDuration={200}
                                />
                            </View>
                        )}
                    </Button>
                </View>
            </View>
        </View>
    );
}