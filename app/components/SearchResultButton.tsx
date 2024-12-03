import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vh, vw } from "../utils/ViewpointEmulator";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";

export default function SearchResultButton(props: any): JSX.Element {
    const { image, title, subtitle, onPress } = props;

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.imageView}>
                <Image 
                    source={image} 
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.textView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width: vw(90),
        height: vh(7),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: vh(2),
    },
    imageView: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: vh(7) / 2,
    },
    image: {
        height: "90%",
        aspectRatio: 1,
        borderRadius: vh(7) / 2,
    },
    textView: {
        width: "80%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    title: {
        color: COLORS.primary.text,
        fontSize: FontSizeConstants.nm,
    },
    subtitle: {
        color: COLORS.tertiary.text,
        fontSize: FontSizeConstants.sm,
    },
});