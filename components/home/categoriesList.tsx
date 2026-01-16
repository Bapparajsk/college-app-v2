// components/ProjectsList.tsx
import { getCategoryDisplayName } from "@/theme/category-themes";
import { ProjectCategory } from "@/types/project";
import { FlashList } from "@shopify/flash-list";
import {
    BotMessageSquareIcon,
    ChevronRightIcon,
    CodeIcon,
    CogIcon,
    LucideIcon,
    MonitorCogIcon,
    UnplugIcon,
    WifiIcon,
} from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { AnimatedButton } from "../ui/button";

const icons: Record<ProjectCategory, LucideIcon> = {
    "computer-science": MonitorCogIcon,
    electronics: UnplugIcon,
    automobile: CogIcon,
    software: CodeIcon,
    iot: WifiIcon,
    robotics: BotMessageSquareIcon,
};

const ProjectsList: React.FC = () => {
    const categories: ProjectCategory[] = [
        "computer-science",
        "electronics",
        "automobile",
        "software",
        "iot",
        "robotics",
    ];

    return (
        <View className="flex-1 px-4 mt-4">
            <Text className="text-2xl font-poppins-semibold mb-3 text-gray-800">
                Explore Projects
            </Text>
            <FlashList
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const Icon = icons[item as ProjectCategory];
                    return (
                        <AnimatedButton scale={0.97} activeOpacity={0.8}>
                            <View
                                className={`w-full h-20 rounded-full mb-3 flex-row items-center px-2 ${index === 0 ? "bg-black" : "bg-black/15"}`}
                            >
                                <View className="flex-row items-center flex-1">
                                    <View className="flex-row items-center flex-1">
                                        <View className="w-16 h-16  bg-[#EFF7F6] rounded-full items-center justify-center">
                                            <Icon size={24} strokeWidth={2.5} />
                                        </View>
                                        <View className="ml-2">
                                            <Text
                                                className={`text-xl font-poppins-semibold ${index === 0 ? "text-white" : "text-gray-800"}`}
                                            >
                                                {getCategoryDisplayName(item)}
                                            </Text>
                                            <Text
                                                className={`text-lg font-poppins-medium ${index === 0 ? "text-gray-200" : "text-gray-800"}`}
                                            >
                                                {getCategoryDisplayName(item)}
                                            </Text>
                                        </View>
                                    </View>
                                    <View className="p-2 rounded-full bg-black mr-3">
                                        <ChevronRightIcon color={"white"} />
                                    </View>
                                </View>
                            </View>
                        </AnimatedButton>
                    );
                }}
            />
        </View>
    );
};

export default ProjectsList;
