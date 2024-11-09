import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";
import { vh, vw } from "../utils/ViewpointEmulator";

export default function NextButton(props: any): JSX.Element {
    const { onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: vw(20),
        height: vh(5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: vh(5) / 2,
        backgroundColor: COLORS.tertiary.background,
    },
    text: {
        color: COLORS.primary.background,
        fontSize: FontSizeConstants.nm,
    },
});
