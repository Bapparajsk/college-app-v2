import { colors } from "@/theme/theme";
import { Link } from "expo-router";
import { BellIcon, UserRoundIcon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Button, { ButtonWrapper } from "../ui/button";

export default function Header() {
    return (
        <View className="w-full px-5 h-20 justify-center items-center">
            <View className="w-full h-16 flex-row justify-between items-center">
                <Link href={"/profile"} asChild push>
                    <TouchableOpacity activeOpacity={0.7} className="w-auto h-full flex-row justify-center items-center gap-2">
                        <Button
                            className="size-16 rounded-full"
                        >
                            {() => (
                                <View className="size-full rounded-full overflow-hidden bg-white items-center justify-center">
                                    <UserRoundIcon size={30} strokeWidth={2} />
                                </View>
                            )}
                        </Button>
                        <View className="flex gap-1">
                            <Text className="font-poppins-semibold text-xl">
                                Hello, Bapparaj sk
                            </Text>
                            <Text className="font-poppins-medium text-gray-600 capitalize">
                                complete your course today
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Link>
                <Button className="size-16 ">
                    {({ pressed, hovered }) => {
                        return (
                            <ButtonWrapper rounded="full" hovered={hovered} pressed={pressed} style={{ backgroundColor: colors.black }}>
                                <BellIcon
                                    size={24}
                                    color={colors.white}
                                />
                            </ButtonWrapper>
                        )
                    }}
                </Button>
            </View>
        </View>
    );
}