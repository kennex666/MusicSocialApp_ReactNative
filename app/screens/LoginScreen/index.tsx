import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/CText";
import FormPasswordInput from "../../components/FormPasswordInput";
import FormTextInput from "../../components/FormTextInput";
import Stack from "../../components/Stack";
import TextButton from "../../components/TextButton";
import { COLORS } from "../../constants/color";
import {
    ButtonImageSizeContants,
    FontSizeConstants,
} from "../../constants/font-size";
import { SCREEN_NAME } from "../../constants/screen";
import { vh, vw } from "../../utils/ViewpointEmulator";
import ImageButton from "../../components/ImageButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";

export default function LoginScreen(): JSX.Element {
    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [errorColor, setErrorColor] = useState<string>("");
    const setErrorAndColor = (message: string, color: string) => {
        setError(message);
        setErrorColor(color);
    }

    const back = () => {
        navigation.goBack();
    };
    const login = async () => {
        setErrorAndColor("Please wait...", "white");

        try {
            const response = await fetch(
                "https://674f2f37bb559617b26e60fd.mockapi.io/users",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            const user = data.find(
                (user: any) =>
                    user.email === email && user.password === password
            );

            if (!user) {
                setErrorAndColor("Email or password is incorrect.", "red");
                return;
            }
            
            setErrorAndColor("Login successful.", "green");
            navigation.navigate(SCREEN_NAME.HOME);
        } catch (error) {
            console.log(error);
            setErrorAndColor("An error occurred. Please try again later.", "red");
        }
    };
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
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(40)}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                >
                    <Text
                        size={FontSizeConstants.xxxl}
                        color={COLORS.secondary.text}
                        bold={true}
                        textAlign="center"
                        value="Login"
                    />
                    <FormTextInput
                        placeholder={"Email"}
                        onChangeText={setEmail}
                    />
                    <FormPasswordInput
                        placeholder={"Password"}
                        onChangeText={setPassword}
                    />
                    <TextButton
                        text={"Log in"}
                        buttonStyle={styles.loginButton}
                        textStyle={styles.loginText}
                        onPress={login}
                    />
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
        justifyContent: "space-between",
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
    returnButton: {
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
});
