import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { vh, vw } from "../../utils/ViewpointEmulator";
import { COLORS } from "../../constants/color";
import Text from "../../components/CText";
import { FontSizeConstants } from "../../constants/font-size";
import Stack from "../../components/Stack";
import FormTextInput from "../../components/FormTextInput";
import FormPasswordInput from "../../components/FormPasswordInput";
import TextButton from "../../components/TextButton";

export default function LoginScreen(): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack
                    width={vw(85)}
                    height={vh(50)}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                >
                    <Text
                        size={FontSizeConstants.xxxl}
                        color={COLORS.primary.text}
                        bold={true}
                        textAlign="center"
                        value="Login"
                    />
                    <FormTextInput />
                    <FormPasswordInput />
                    <TextButton
                        text={"Log in"}
                        buttonStyle={styles.loginButton}
                        textStyle={styles.loginText}
                    />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary.background,
        gap: vh(1),
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