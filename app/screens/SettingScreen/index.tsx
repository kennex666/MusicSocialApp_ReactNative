import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { vh } from "../../utils/ViewpointEmulator";
import { COLORS } from "../../constants/color";
import SettingButton from "../../components/SettingButton";
import SettingProfileButton from "../../components/SettingProfileButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";

export default function SettingScreen(): JSX.Element {
    const name = "Maya";
    const image = IMAGE_RESOURCE.static.testing;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <SettingProfileButton
                    name={"Maya"}
                    image={image}
                    onPressButton={() => {}}
                    onPressViewProfile={() => {}}
                />
                <SettingButton text={"Change Password"} onPress={() => {}} />
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
});
