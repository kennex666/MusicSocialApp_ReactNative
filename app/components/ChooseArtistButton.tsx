import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";
import { vw } from "../utils/ViewpointEmulator";

export default function ChooseArtistButton(props: any): JSX.Element {
    const { image, onPress } = props;

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.text}>Choose</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: vw(30),
        aspectRatio: 1,
        borderRadius: vw(30) / 2,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "gray",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: vw(30) / 2,
    },
    text: {
        color: COLORS.primary.text,
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    },
});
