import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";
import { vw } from "../utils/ViewpointEmulator";

export default function ChooseArtistButton(props: any): JSX.Element {
    const { image, size, onPress } = props;

    return (
        <View style={styles.view}>
            <TouchableOpacity 
                style={[
                    styles.button,
                    { 
                        width: size ?? vw(30),
                        borderRadius: size ? size / 2 : vw(30) / 2,
                    },
                ]} 
                onPress={onPress}>
                <Image
                    source={image}
                    style={[
                        styles.image,
                        { borderRadius: size ? size / 2 : vw(30) / 2 },
                    ]}
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
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "gray",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: COLORS.primary.text,
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    },
});
