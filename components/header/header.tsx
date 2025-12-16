import { colors } from "@/theme/theme";
import { BellIcon, SearchIcon, UserRoundIcon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Button, { ButtonWrapper } from "../ui/button";
import CircularProgress from "../ui/CircularProgress";

export default function Header() {
    return (
        <View className="w-full px-5 h-20 justify-center items-center">
            <View className="w-full h-16 flex-row justify-between items-center">
                <View className="w-auto h-full flex-row justify-center items-center gap-2">
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
                </View>
                <TouchableOpacity>
                    <CircularProgress size={55} strokeWidth={1.5} progress={100} color="#000000" bgColor="#ffffff" duration={1000}>
                        <SearchIcon
                            size={24}
                        />
                    </CircularProgress>
                </TouchableOpacity>
                <Button className="size-16 ">
                    {({ pressed, hovered }) => {
                        return (
                            <ButtonWrapper rounded="full" hovered={hovered} pressed={pressed} style={{ backgroundColor: colors.black }}>
                                <Svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={"white"}
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <Path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                    <Path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                                    <Path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                    <Path d="M17 10h2a2 2 0 0 1 2 2v1" />
                                    <Path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                    <Path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                                </Svg>
                            </ButtonWrapper>
                        )
                    }}
                </Button>
            </View>
        </View>
    );
}