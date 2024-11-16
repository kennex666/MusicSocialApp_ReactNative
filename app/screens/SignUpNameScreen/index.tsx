import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/CText";
import FormTextInput from "../../components/FormTextInput";
import ImageButton from "../../components/ImageButton";
import NextButton from "../../components/NextButton";
import Stack from "../../components/Stack";
import { COLORS } from "../../constants/color";
import { ButtonImageSizeContants, FontSizeConstants } from "../../constants/font-size";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { vh, vw } from "../../utils/ViewpointEmulator";

export default function SignUpNameScreen(): JSX.Element {
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
                        value="What's your name?"
                    />
                    <FormTextInput />
                    <Text
                        size={FontSizeConstants.xs}
                        color={COLORS.primary.text}
                        bold={true}
                        value="This appears on your Spotify profile."
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
