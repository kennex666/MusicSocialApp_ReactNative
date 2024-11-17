import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/CText";
import FormTextInput from "../../components/FormTextInput";
import ImageButton from "../../components/ImageButton";
import NextButton from "../../components/NextButton";
import Stack from "../../components/Stack";
import { COLORS } from "../../constants/color";
import {
    ButtonImageSizeContants,
    FontSizeConstants,
} from "../../constants/font-size";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { vh, vw } from "../../utils/ViewpointEmulator";
import TextButton from "../../components/TextButton";
import { useState } from "react";

const handlers = {
    onPressPolicySend: ({ active, setActive }: any) => {},
    onPressPolicyShare: ({ active, setActive }: any) => {},
}

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
                    width={vw(90)}
                    height={vh(0.1)}
                    backgroundColor={COLORS.primary.text}
                    children={null}
                />
                <Stack
                    width={vw(80)}
                    height={vh(40)}
                    justifyContent={"space-evenly"}
                    alignItems={"flex-start"}
                    gap={vh(1)}
                >
                    <Text
                        size={FontSizeConstants.sm}
                        value='By tapping on "Create account", you agree to the spotify Terms of Use.'
                    />
                    <Text
                        size={FontSizeConstants.sm}
                        color={COLORS.spotify.background}
                        value="Term of Use"
                    />
                    <Text
                        size={FontSizeConstants.sm}
                        value="To learn more about how Spotify collect, uses, shares and protects your personal data, Please see the Spotify Privacy Policy."
                    />
                    <Text
                        size={FontSizeConstants.sm}
                        color={COLORS.spotify.background}
                        value="Privacy Policy"
                    />
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Stack width={"80%"}>
                            <Text
                                size={FontSizeConstants.sm}
                                value="Please send me news and offers from Spotify."
                            />
                        </Stack>
                        <ImageButton
                            image={IMAGE_RESOURCE.signUp.check}
                            size={ButtonImageSizeContants.sm}
                            style={styles.checkButton}
                            isControllActive={false}
                            onPress={handlers.onPressPolicySend}
                        />
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Stack width={"80%"}>
                            <Text
                                size={FontSizeConstants.sm}
                                value="Share my registration data with Spotify content providers for marketing purposes."
                            />
                        </Stack>
                        <ImageButton
                            image={IMAGE_RESOURCE.signUp.check}
                            size={ButtonImageSizeContants.sm}
                            style={styles.checkButton}
                            isControllActive={false}
                            onPress={handlers.onPressPolicyShare}
                        />
                    </Stack>
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(25)}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                >
                    <TextButton
                        text="Create an account"
                        buttonStyle={styles.createButton}
                        textStyle={styles.createText}
                    />
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
    createButton: {
        width: "50%",
        height: vh(6),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: vh(6) / 2,
        backgroundColor: COLORS.primaryReverse.background,
    },
    createText: {
        color: COLORS.primaryReverse.text,
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    },
    checkButton: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
});
