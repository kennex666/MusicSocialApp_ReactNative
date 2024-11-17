import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/color";
import { vh, vw } from "../../utils/ViewpointEmulator";
import Stack from "../../components/Stack";
import SearchTextInput from "../../components/SearchTextInput";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import SearchResultButton from "../../components/SearchResultButton";
import Text from "../../components/CText";
import { FontSizeConstants } from "../../constants/font-size";

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

export default function SearchScreen(): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack backgroundColor={"red"}>
                    <SearchTextInput image={IMAGE_RESOURCE.search.iconSearch} />
                </Stack>
                <Stack width={vw(85)} height={vh(5)} justifyContent={"center"} alignItems={"flex-start"}>
                    <Text size={FontSizeConstants.md} bold={true}>
                        Search results
                    </Text>
                </Stack>
                <Stack height={vh(80)}>
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
        paddingVertical: vh(2),
        gap: vh(2),
    },
});
