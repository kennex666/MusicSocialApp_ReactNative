import { StyleSheet, TextInput } from "react-native";
import { vh, vw } from "../utils/ViewpointEmulator";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";

export default function FormPasswordInput(props: any): JSX.Element {
    return <TextInput style={styles.textInput} secureTextEntry />;
};

const styles = StyleSheet.create({
    textInput: {
        width: vw(85),
        height: vh(5.5),
        color: COLORS.primary.text,
        backgroundColor: COLORS.secondary.background,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontSize: FontSizeConstants.nm,
    },
});
