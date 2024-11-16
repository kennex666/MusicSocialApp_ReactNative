import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/color";
import { vh, vw } from "../../utils/ViewpointEmulator";
import ImageButton from "../../components/ImageButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { ButtonImageSizeContants, FontSizeConstants } from "../../constants/font-size";
import FormTextInput from "../../components/FormTextInput";
import NextButton from "../../components/NextButton";
import Stack from "../../components/Stack";
import Text from "../../components/CText";

export default function SignUpPasswordScreen(): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack
                    width={vw(85)}
                    height={vh(10)}
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                >
                    <ImageButton
                        image={IMAGE_RESOURCE.signUp.iconBack}
                        size={ButtonImageSizeContants.xl}
                        style={styles.returnButton}
                        onPress={() => {}}
                    />
                    <Stack width={"60%"}>
                        <Text
                            size={FontSizeConstants.md}
                            color={COLORS.primary.text}
                            bold={true}
                            textAlign="center"
                            value="Create account"
                        />
                    </Stack>
                </Stack>
                <Stack width={vw(85)} height={vh(15)} gap={vh(0.5)}>
                    <Text
                        size={FontSizeConstants.lg}
                        color={COLORS.primary.text}
                        bold={true}
                        value="Create a password"
                    />
                    <FormTextInput />
                    <Text
                        size={FontSizeConstants.xs}
                        color={COLORS.primary.text}
                        bold={true}
                        value="Use at least 8 characters."
                    />
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(5)}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <NextButton />
                </Stack>
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
    returnButton: {
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
});
