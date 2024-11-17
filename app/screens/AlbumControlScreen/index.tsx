import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AlbumControlButton from "../../components/AlbumControlButton";
import Text from "../../components/CText";
import Stack from "../../components/Stack";
import { COLORS } from "../../constants/color";
import { FontSizeConstants } from "../../constants/font-size";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { vh, vw } from "../../utils/ViewpointEmulator";

export default function AlbumControlScreen(): JSX.Element {
    const albumName = "1(Remastered)";
    const albumArtist = "The Beatles";

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    colors={["#A62B20", "#121212"]}
                    locations={[0, 0.38]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.container}
                >
                    <Stack
                        width={vw(85)}
                        height={vh(30)}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Image
                            source={IMAGE_RESOURCE.static.album}
                            style={{
                                width: "90%",
                                height: "90%",
                            }}
                            resizeMode="contain"
                        />
                    </Stack>
                    <Stack
                        width={vw(85)}
                        height={vh(6)}
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                    >
                        <Text
                            size={FontSizeConstants.lg}
                            value={albumName}
                            textAlign="center"
                            color={COLORS.primary.text}
                            bold={true}
                        />
                        <Text
                            size={FontSizeConstants.md}
                            value={albumArtist}
                            textAlign="center"
                            color={COLORS.tertiary.text}
                        />
                    </Stack>
                    <Stack
                        width={vw(85)}
                        height={vh(45)}
                        justifyContent={"space-between"}
                    >
                        <AlbumControlButton
                            text="Like"
                            image={IMAGE_RESOURCE.albumControl.iconLike}
                            onPress={() => {}}
                        />
                        <AlbumControlButton
                            text="View artist"
                            image={IMAGE_RESOURCE.albumControl.iconArtist}
                            onPress={() => {}}
                        />
                        <AlbumControlButton
                            text="Share"
                            image={IMAGE_RESOURCE.albumControl.iconShare}
                            onPress={() => {}}
                        />
                        <AlbumControlButton
                            text="Like all songs"
                            image={IMAGE_RESOURCE.albumControl.iconLike}
                            onPress={() => {}}
                        />
                        <AlbumControlButton
                            text="Add to playlist"
                            image={IMAGE_RESOURCE.albumControl.iconAdd}
                            onPress={() => {}}
                        />
                        <AlbumControlButton
                            text="Add to queue"
                            image={IMAGE_RESOURCE.albumControl.iconQueue}
                            onPress={() => {}}
                        />
                        <AlbumControlButton
                            text="Go to radio"
                            image={IMAGE_RESOURCE.albumControl.iconRadio}
                            onPress={() => {}}
                        />
                    </Stack>
                    <Stack
                        width={vw(85)}
                        height={vh(10)}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                        onPress={() => {}}
                    >
                        <Stack style={{ marginBottom: "5%" }}>
                            <Text bold={true} value="Close" />
                        </Stack>
                        <Stack
                            width={"50%"}
                            height={"5%"}
                            backgroundColor={COLORS.primary.text}
                            style={{ borderRadius: 10 }}
                            children={null}
                        />
                    </Stack>
                </LinearGradient>
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
        paddingVertical: vh(2),
    },
});
