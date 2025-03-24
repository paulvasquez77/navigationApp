import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    children: string;
    color: "primary" | "secondary" | "tertiary";
}

export default function CustomButton({ children, color, onPress, onLongPress }: Props) {

    const btnColor = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
    }[color];

    return (
        <Pressable className={`p-3 rounded-md ${btnColor} active:opacity-90`} onPress={onPress} onLongPress={onLongPress}>
            <Text className='text-white text-center'>{children}</Text>
        </Pressable>
    )
}
