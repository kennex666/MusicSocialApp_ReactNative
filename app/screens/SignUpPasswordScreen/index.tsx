import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/CText";
import ImageButton from "../../components/ImageButton";
import NextButton from "../../components/NextButton";
import Stack from "../../components/Stack";
import { COLORS } from "../../constants/color";
import { ButtonImageSizeContants, FontSizeConstants } from "../../constants/font-size";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { vh, vw } from "../../utils/ViewpointEmulator";
import FormPasswordInput from "../../components/FormPasswordInput";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screen";
import { useState } from "react";

export default function SignUpPasswordScreen(): JSX.Element {
    const navigation = useNavigation();
    const route = useRoute();
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [errorColor, setErrorColor] = useState<string>("");
    const setErrorAndColor = (message: string, color: string) => {
        setError(message);
        setErrorColor(color);
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const back = () => {navigation.goBack();}
    const signUpGender = () => {
        if (password === "") {
            setErrorAndColor("Password is required", "red");
            return;
        }

        if (!passwordRegex.test(password)) {
            setErrorAndColor("Password must contain at least 8 characters, including 1 letter and 1 number", "red");
            return;
        }

        setErrorAndColor("", "transparent");
        navigation.navigate(SCREEN_NAME.SIGNUP_GENDER, { email: route.params.email, password })
    }

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
                        onPress={back}
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
                    <FormPasswordInput onChangeText={setPassword} />
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
                    <NextButton onPress={signUpGender} />
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(10)}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                >
                    <Text color={errorColor}>{error}</Text>
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
