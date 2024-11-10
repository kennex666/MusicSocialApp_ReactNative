import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/color";
import { vh, vw } from "../../utils/ViewpointEmulator";
import ImageButton from "../../components/ImageButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { ButtonImageSizeContants, FontSizeConstants } from "../../constants/font-size";
import FormTextInput from "../../components/FormTextInput";
import NextButton from "../../components/NextButton";

export default function SignUpNameScreen(): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <ImageButton
                        image={IMAGE_RESOURCE.signUp.iconBack}
                        size={ButtonImageSizeContants.xl}
                        onPress={() => {}}
                        style={styles.backButton}
                    />
                    <Text style={styles.titleText}>Create account</Text>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>What's your name?</Text>
                    <FormTextInput />
                    <Text style={styles.inputNote}>This appears on your Spotify profile.</Text>
                </View>
                <View style={styles.buttonView}>
                    {/* <NextButton /> */}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.primary.background,
        gap: vh(1),
    },
    titleView: {
        width: vw(85),
        height: vh(10),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    titleText: {
        width: "60%",
        textAlign: "center",
        color: COLORS.primary.text,
        fontSize: FontSizeConstants.md,
        fontWeight: "bold",
    },
    backButton: {
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    inputView: {
        width: vw(85),
        height: vh(15),
        gap: vh(0.5),
    },
    inputLabel: {
        color: COLORS.primary.text,
        fontSize: FontSizeConstants.lg,
        fontWeight: "bold",
    },
    inputNote: {
        color: COLORS.primary.text,
        fontSize: FontSizeConstants.xs,
        fontWeight: "bold",
    },
    buttonView: {
        width: vw(85),
        height: vh(5),
        justifyContent: "center",
        alignItems: "center",
    },
});
