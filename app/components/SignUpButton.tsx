import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";
import { vh, vw } from "../utils/ViewpointEmulator";

export default function SignUpButton(props: any): JSX.Element {
    const { onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Sign up free</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: vw(80),
        height: vh(5.3),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: COLORS.spotify.background,
    },
    text: {
        color: COLORS.spotify.text,
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    },
});
