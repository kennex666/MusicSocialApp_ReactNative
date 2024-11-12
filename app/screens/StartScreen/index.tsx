import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/color";
import { vh, vw } from "../../utils/ViewpointEmulator";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { FontSizeConstants } from "../../constants/font-size";
import SignUpButton from "../../components/SignUpButton";
import ContinueLogInButton from "../../components/ContinueLogInButton";
import TextButton from "../../components/TextButton";

export default function StartScreen(): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        source={IMAGE_RESOURCE.start.background}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        {"Millions of Songs.\nFree on Spotify."}
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <SignUpButton />
                    <ContinueLogInButton text={"Continue with Google"} image={IMAGE_RESOURCE.start.iconGoogle} />
                    <ContinueLogInButton text={"Continue with Facebook"} image={IMAGE_RESOURCE.start.iconFacebook} />
                    <ContinueLogInButton text={"Continue with Apple"} image={IMAGE_RESOURCE.start.iconApple} />
                    <TextButton text={"Log in"} style={styles.loginButton} textStyle={styles.loginText} />
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
    },
    imageView: {
        width: vw(100),
        height: vh(50),
    },
    textView: {
        width: vw(100),
        height: vh(10),
        justifyContent: "center",
        alignItems: "center",
    },
    buttonView: {
        width: vw(100),
        height: vh(40),
        justifyContent: "center",
        alignItems: "center",
        gap: vh(1.5),
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: COLORS.primary.text,
        textAlign: "center",
        fontSize: FontSizeConstants.xxl,
        fontWeight: "bold",
    },
    loginButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginText:{
        color: COLORS.primary.text,
        textAlign: "center",
        fontSize: FontSizeConstants.nm,
        fontWeight: "bold",
    }
});
