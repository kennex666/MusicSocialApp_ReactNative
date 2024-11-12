import { Text, TouchableOpacity } from "react-native";

export default function TextButton(props: any): JSX.Element {
    const { text, buttonStyle, textStyle, onPress } = props;
    return (
        <TouchableOpacity style={[buttonStyle ?? {}]} onPress={onPress}>
            <Text style={[textStyle ?? {}]}>{text}</Text>
        </TouchableOpacity>
    )
}