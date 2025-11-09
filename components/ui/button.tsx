import { Pressable, PressableProps, PressableStateCallbackType } from "react-native";

type ButtonProps = PressableProps & {
    children: (props: PressableStateCallbackType) => React.ReactNode;
    className?: string;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <Pressable
            className={`rounded-full justify-center items-center ${className}`}
            {...rest}
        >
            {({ hovered, pressed }) => children({ pressed, hovered })}
        </Pressable>
    );
}