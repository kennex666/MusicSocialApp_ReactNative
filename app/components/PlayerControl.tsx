import { StyleSheet, View } from "react-native";
import CText from "./CText";
import { ButtonImageSizeContants, FontSizeConstants } from "../constants/font-size";
import { vh, vw } from "../utils/ViewpointEmulator";
import ImageButton from "./ImageButton";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { verticalScale } from "../utils/Scale";

export default function PlayerControlComponent() {
    return (
      <View style={styles.container}>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: vw(4.3),
        width: vw(100),
        paddingVertical: verticalScale(6),

    },
});