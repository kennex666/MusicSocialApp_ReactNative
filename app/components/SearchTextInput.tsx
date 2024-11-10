import { Image, StyleSheet, TextInput, View } from "react-native";
import { vh, vw } from "../utils/ViewpointEmulator";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";

export default function SearchTextInput(props: any): JSX.Element {
    const { image } = props;
    return (
        <View style={styles.view}>
            <View style={styles.imageView}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <TextInput 
                style={styles.textInput} 
                placeholder="Search"
                placeholderTextColor={COLORS.primaryReverse.text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: vw(85),
        height: vh(5.5),
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.primaryReverse.background,
        borderRadius: 5,
        flexDirection: "row",
    },
    imageView: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    image: {
        height: "75%",
        aspectRatio: 1,
        marginLeft: "15%",
    },
    textInput: {
        width: "85%",
        height: "100%",
        color: COLORS.primaryReverse.text,
        fontSize: FontSizeConstants.nm,
    }
});
