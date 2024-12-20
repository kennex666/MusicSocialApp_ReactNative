import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/CText";
import FormTextInput from "../../components/FormTextInput";
import ImageButton from "../../components/ImageButton";
import Stack from "../../components/Stack";
import TextButton from "../../components/TextButton";
import { COLORS } from "../../constants/color";
import {
    ButtonImageSizeContants,
    FontSizeConstants,
} from "../../constants/font-size";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { vh, vw } from "../../utils/ViewpointEmulator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screen";
import { useState } from "react";

type userType = {
    email: string;
    password: string;
    gender: string;
    name: string;
};

type routeProps = RouteProp<{ params: userType }, "params">;

export default function SignUpNameScreen(): JSX.Element {
    const navigation = useNavigation();
    const route = useRoute<routeProps>();
    const [name, setName] = useState<string>("");
    const [policySend, setPolicySend] = useState<boolean>(false);
    const [policyShare, setPolicyShare] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [errorColor, setErrorColor] = useState<string>("");
    const setErrorAndColor = (message: string, color: string) => {
        setError(message);
        setErrorColor(color);
    }

    const user = route.params;

    const back = () => {navigation.goBack()};
    const onPressPolicySend = () => {setPolicySend(!policySend);}
    const onPressPolicyShare = () => {setPolicyShare(!policyShare);}

    const createUser = async () => {
        if (name === "") {
            setErrorAndColor("Name is required", "red");
            return;
        }

        const body = JSON.stringify({
            email: user.email,
            password: user.password,
            gender: user.gender,
            name: name,
        });

        console.log(`Creating user with body: ${body}`);

        try {
            setErrorAndColor("Please wait...", "white");
            const response = await fetch('https://674f2f37bb559617b26e60fd.mockapi.io/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: body,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setErrorAndColor("", "transparent");
            navigation.navigate(SCREEN_NAME.BOTTOM_TAB);
        } catch (error) {
            setErrorAndColor("An error occurred", "red");
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
                        value="What's your name?"
                    />
                    <FormTextInput onChangeText={setName} />
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
                            onPress={onPressPolicySend}
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
                            onPress={onPressPolicyShare}
                        />
                    </Stack>
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(10)}
                    flexDirection={"column"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                >
                    <Text color={errorColor}>{error}</Text>
                </Stack>
                <Stack
                    width={vw(85)}
                    height={vh(15)}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                >
                    <TextButton
                        text="Create an account"
                        buttonStyle={styles.createButton}
                        textStyle={styles.createText}
                        onPress={createUser}
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
        // borderRadius: vh(6) / 2,
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
