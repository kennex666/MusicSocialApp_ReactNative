import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";
import { vh, vw } from "../utils/ViewpointEmulator";

export default function ContinueLogInButton(props: any): JSX.Element {
    const { text, image, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.imageView}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: vw(80),
        height: vh(6),
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: vh(6) / 2,
        backgroundColor: COLORS.primary.background,
        flexDirection: "row",
        borderColor: COLORS.primary.text,
        borderWidth: 1,
    },
    imageView: {
        width: "27.5%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    image: {
        height: "75%",
        aspectRatio: 1,
        marginLeft: "15%",
    },
    text: {
        width: "72.5%",
        color: COLORS.primary.text,
        textAlign: "left",
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    },
});
