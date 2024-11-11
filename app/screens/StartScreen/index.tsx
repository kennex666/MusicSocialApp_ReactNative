import { Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/color";
import { vh, vw } from "../../utils/ViewpointEmulator";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { FontSizeConstants } from "../../constants/font-size";
import SignUpButton from "../../components/SignUpButton";
import ContinueLogInButton from "../../components/ContinueLogInButton";
import TextButton from "../../components/TextButton";
import Stack from "../../components/Stack";
import Text from "../../components/CText";

export default function StartScreen(): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack width={vw(100)} height={vh(50)}>
                    <Image
                        source={IMAGE_RESOURCE.start.background}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </Stack>
                <Stack
                    width={vw(100)}
                    height={vh(10)}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        size={FontSizeConstants.xxl}
                        textAlign="center"
                        bold={true}
                        color={COLORS.primary.text}
                        value={"Millions of Songs.\nFree on Spotify."}
                    />
                </Stack>
                <Stack
                    width={vw(100)}
                    height={vh(40)}
                    justifyContent="center"
                    alignItems="center"
                    rowGap={vh(1)}
                >
                    <SignUpButton />
                    <ContinueLogInButton
                        text={"Continue with Google"}
                        image={IMAGE_RESOURCE.start.iconGoogle}
                    />
                    <ContinueLogInButton
                        text={"Continue with Facebook"}
                        image={IMAGE_RESOURCE.start.iconFacebook}
                    />
                    <ContinueLogInButton
                        text={"Continue with Apple"}
                        image={IMAGE_RESOURCE.start.iconApple}
                    />
                    <TextButton
                        text={"Log in"}
                        buttonStyle={styles.loginButton}
                        textStyle={styles.loginText}
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
    },
    image: {
        width: "100%",
        height: "100%",
    },
    loginButton: {
        height: vh(6),
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        color: COLORS.primary.text,
        textAlign: "center",
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    },
});
