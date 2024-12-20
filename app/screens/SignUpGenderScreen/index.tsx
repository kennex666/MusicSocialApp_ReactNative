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
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screen";
import { useState } from "react";

export default function SignUpGenderScreen(): JSX.Element {
    const navigation = useNavigation();
    const route = useRoute();
    const [gender, setGender] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [errorColor, setErrorColor] = useState<string>("");
    const setErrorAndColor = (message: string, color: string) => {
        setError(message);
        setErrorColor(color);
    }

    const genderRegex = /^(male|female|other)$/i;

    const back = () => {navigation.goBack();}
    const signUpName = () => {
        if (gender === "") {
            setErrorAndColor("Gender is required", "red");
            return;
        }

        if (!genderRegex.test(gender)) {
            setErrorAndColor("Gender must be either Male/Female/Other", "red");
            return;
        }

        setErrorAndColor("", "transparent");
        navigation.navigate(SCREEN_NAME.SIGNUP_NAME, {email: route.params.email, password: route.params.password, gender})
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
                        value="What's your gender?"
                    />
                    <FormTextInput onChangeText={setGender} />
                    <Text
                        size={FontSizeConstants.xs}
                        color={COLORS.primary.text}
                        bold={true}
                        value=""
                    />
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(5)}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <NextButton onPress={signUpName} />
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
