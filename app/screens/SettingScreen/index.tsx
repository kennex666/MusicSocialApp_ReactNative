import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { vh, vw } from "../../utils/ViewpointEmulator";
import { COLORS } from "../../constants/color";
import SettingButton from "../../components/SettingButton";
import SettingProfileButton from "../../components/SettingProfileButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import Stack from "../../components/Stack";
import ImageButton from "../../components/ImageButton";
import {
    ButtonImageSizeContants,
    FontSizeConstants,
} from "../../constants/font-size";
import Text from "../../components/CText";

export default function SettingScreen(): JSX.Element {
    const name = "Maya";
    const image = IMAGE_RESOURCE.static.testing;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack
                    width={vw(100)}
                    height={vh(10)}
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    backgroundColor={COLORS.primary.background}
                >
                    <Stack
                        width={"20%"}
                        height={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <ImageButton
                            size={ButtonImageSizeContants.lg}
                            image={IMAGE_RESOURCE.signUp.iconBack}
                        />
                    </Stack>
                    <Stack
                        width={"60%"}
                        height={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text
                            value={"Settings"}
                            size={FontSizeConstants.md}
                            bold={true}
                        />
                    </Stack>
                </Stack>
                <Stack
                    width={vw(100)}
                    height={vh(90)}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    backgroundColor={"black"}
                >
                    <SettingProfileButton
                        name={"Maya"}
                        image={image}
                        onPressButton={() => {}}
                        onPressViewProfile={() => {}}
                    />
                    <Stack width={vw(100)} height={vh(55)}>
                        <ScrollView
                            contentContainerStyle={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <SettingButton
                                text={"Account"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Data Saver"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Languages"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Playback"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Explicit Content"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Devices"}
                                onPress={() => {}}
                            />
                            <SettingButton text={"Car"} onPress={() => {}} />
                            <SettingButton text={"Social"} onPress={() => {}} />
                            <SettingButton
                                text={"Voice Assistant & Apps"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Audio Quality"}
                                onPress={() => {}}
                            />
                            <SettingButton
                                text={"Storage"}
                                onPress={() => {}}
                            />
                        </ScrollView>
                    </Stack>
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
});
