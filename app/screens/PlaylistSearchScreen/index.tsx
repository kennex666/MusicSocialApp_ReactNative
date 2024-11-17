import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/CText";
import ImageButton from "../../components/ImageButton";
import SearchTextInput from "../../components/SearchTextInput";
import Stack from "../../components/Stack";
import { COLORS } from "../../constants/color";
import {
    ButtonImageSizeContants,
    FontSizeConstants,
} from "../../constants/font-size";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { vh, vw } from "../../utils/ViewpointEmulator";
import SearchResultButton from "../../components/SearchResultButton";

const data = [
    {
        id: 1,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 2,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 3,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 4,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 5,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 6,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 7,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 8,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 9,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 10,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 11,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 12,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 13,
        title: "Cơm gà xối mỡ",
        subtitle: "Cơm gà xối mỡ ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
    {
        id: 14,
        title: "Bún bò Huế",
        subtitle: "Bún bò Huế ngon tuyệt",
        image: require("../../../assets/favicon.png"),
    },
];

const handlers = {
    onPlay: () => {},
};

export default function PlaylistSearchScreen(): JSX.Element {
    const albumCover = IMAGE_RESOURCE.static.album;
    const spotifyIcon = IMAGE_RESOURCE.album.iconSpotify;
    const spotify = "Spotify";
    const likeAmount = "1,629,592 likes ·  6h 48m";

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    colors={["#C63224", "#641D17", "#271513", "#121212"]}
                    locations={[0, 0.37, 0.63, 1]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.container}
                >
                    <Stack
                        width={vw(90)}
                        justifyContent={"center"}
                        alignItems={"flex-start"}
                    >
                        <ImageButton
                            size={ButtonImageSizeContants.xl}
                            image={IMAGE_RESOURCE.album.iconBack}
                            onPress={() => {}}
                        />
                    </Stack>
                    <Stack
                        width={vw(85)}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        flexDirection={"row"}
                    >
                        <SearchTextInput
                            width={vw(65)}
                            height={vh(5.5)}
                            image={IMAGE_RESOURCE.search.iconSearchWhite}
                            backgroundColor={"rgba(0, 0, 0, 0.2)"}
                            placeholder="Find in playlist"
                            placeholderTextColor={COLORS.primary.text}
                            textColor={COLORS.primary.text}
                            textSize={FontSizeConstants.nm}
                        />
                        <Stack
                            width={vw(15)}
                            height={vh(5.5)}
                            justifyContent={"center"}
                            alignItems={"center"}
                            backgroundColor={"rgba(0, 0, 0, 0.2)"}
                            style={{ borderRadius: vh(5.5) / 10 }}
                            onPress={() => {}}
                        >
                            <Text value="Cancel" color={COLORS.primary.text} />
                        </Stack>
                    </Stack>
                    <Stack
                        width={vw(95)}
                        height={vh(35)}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Image
                            source={albumCover}
                            resizeMode="contain"
                            style={{ width: "90%", height: "90%" }}
                        />
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        width={vw(90)}
                        height={vh(10)}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Stack
                            width={"80%"}
                            height={"100%"}
                            justifyContent={"space-evenly"}
                            alignItems={"flex-start"}
                        >
                            <Stack
                                flexDirection={"row"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                gap={vw(2)}
                                onPress={() => {}}
                            >
                                <Image
                                    source={spotifyIcon}
                                    style={{
                                        width: vw(7),
                                        aspectRatio: 1,
                                        borderRadius: vw(10) / 2,
                                    }}
                                />
                                <Text
                                    size={FontSizeConstants.nm}
                                    bold={true}
                                    color={COLORS.primary.text}
                                    value={spotify}
                                />
                            </Stack>
                            <Text
                                size={FontSizeConstants.sm}
                                bold={false}
                                color={COLORS.primary.text}
                                value={likeAmount}
                            />
                        </Stack>
                        <Stack
                            width={"20%"}
                            height={"100%"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <ImageButton
                                image={IMAGE_RESOURCE.player.play}
                                size={ButtonImageSizeContants.xxl}
                                isControllActive={false}
                                onPress={handlers.onPlay}
                            />
                        </Stack>
                    </Stack>
                    <Stack width={vw(90)} height={vh(30)}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <SearchResultButton
                                    image={item.image}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                />
                            )}
                            keyExtractor={(item) => item.id.toString()}
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
