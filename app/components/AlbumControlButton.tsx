import { Image } from "react-native";
import { vw } from "../utils/ViewpointEmulator";
import Stack from "./Stack";
import Text from "./CText";
import { FontSizeConstants } from "../constants/font-size";

export default function AlbumControlButton(props: any): JSX.Element {
    const { text, image, onPress } = props;
    return (
        <Stack
            width={vw(85)}
            height={vw(10)}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            onPress={onPress}
        >
            <Stack width={"15%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Image
                    source={image}
                    style={{ height: "50%" }}
                    resizeMode="contain"
                />
            </Stack>
            <Stack
                width={"85%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"flex-start"}
            >
                <Text size={FontSizeConstants.nm} value={text} />
            </Stack>
        </Stack>
    );
}
