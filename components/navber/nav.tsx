import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AtSignIcon, CalendarDaysIcon, CogIcon, HouseIcon } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const PRIMARY_COLOR = "#000";
const SECONDARY_COLOR = "#e5e5e5";

const CustomNavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {

  const insets = useSafeAreaInsets();

  return (
    <View
      className="gap-2 absolute flex-row justify-center items-center w-[80%] self-center rounded-3xl px-3 py-4"
      style={{ bottom: insets.bottom }}
    >
      {state.routes.map((route, index) => {
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            onPress={onPress}
            style={{
              backgroundColor: isFocused ? PRIMARY_COLOR : SECONDARY_COLOR,
            }}
            className={`bg-black px-5 py-3.5 rounded-full flex-row items-center gap-1`}
          >
            {getIconByRouteName(
              route.name,
              isFocused ? "#EFF7F6" : "#000000"
            )}
            {isFocused && (
              <Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)}
                className={"text-lg font-poppins-semibold text-white"}
              >
                {label as string}
              </Animated.Text>
            )}
          </AnimatedTouchableOpacity>
        );
      })}
    </View>
  );

  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case "index":
        return <HouseIcon size={24} color={color} strokeWidth={2} />;
      case "routing":
        return <CalendarDaysIcon size={24} color={color} strokeWidth={2} />;
      case "community":
        return <AtSignIcon size={22} color={color} strokeWidth={2} />;
      case "setting":
        return <CogIcon size={24} color={color} strokeWidth={2} />;
      default:
        return <HouseIcon size={22} color={color} strokeWidth={2} />;
    }
  }
};

export default CustomNavBar;