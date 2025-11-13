import { buttonVariants } from "@/theme/theme";
import { BellIcon } from "lucide-react-native";
import { Image, Text, View } from "react-native";
import Button, { ButtonWrapper } from "../ui/button";

export default function Header() {
    return (
        <View className="w-full px-5 h-20 justify-center items-center">
            <View className="w-full h-16 flex-row justify-between items-center">
                <View className="w-auto h-full flex-row justify-center items-center gap-2">
                    <Button
                        className="size-16 rounded-full "
                    >
                        {({ pressed }) => (
                            <View className="size-full rounded-full overflow-hidden bg-pink-500">
                                <Image
                                    className="w-full h-full"
                                    source={{ uri: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" }}
                                    resizeMode="none"
                                />
                            </View>
                        )}
                    </Button>
                    <View className="flex gap-1">
                        <Text className="font-poppins-semibold text-xl">
                            Hello, Bapparaj sk
                        </Text>
                        <Text className="font-poppins-medium text-lg text-gray-600">
                            Welcome back!
                        </Text>
                    </View>
                </View>
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
            </View>
        </View>
    );
}