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
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screen";
import { useState } from "react";

export default function SignUpEmailScreen(): JSX.Element {
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [errorColor, setErrorColor] = useState<string>("");
    const setErrorAndColor = (message: string, color: string) => {
        setError(message);
        setErrorColor(color);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const back = () => {navigation.goBack();}
    const signUpPassword = async () => {
        if (email === "") {
            setErrorAndColor("Email is required", "red");
            return;
        }

        if (!emailRegex.test(email)) {
            setErrorAndColor("Invalid email. Please try again", "red");
            return;
        }

        try {
            setErrorAndColor("Please wait...", "white");
            const response = await fetch("https://674f2f37bb559617b26e60fd.mockapi.io/users", 
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
            const user = data.find((user: any) => user.email === email);

            if (user) {
                setErrorAndColor("Email is already in use. Please try another email.", "red");
                return;
            }

            setErrorAndColor("", "transparent");
            navigation.navigate(SCREEN_NAME.SIGNUP_PASSWORD, { email })
        } catch (error) {
            setErrorAndColor("An error occurred. Please try again later.", "red");
            console.log(error);
            return;
        }

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
                        value="What's your email?"
                    />
                    <FormTextInput value={email} onChangeText={setEmail} />
                    <Text
                        size={FontSizeConstants.xs}
                        color={COLORS.primary.text}
                        bold={true}
                        value="You will need to confirm this email later."
                    />
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(5)}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <NextButton onPress={signUpPassword} />
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
