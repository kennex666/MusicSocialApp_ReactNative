import { Image } from "react-native";
import { vh, vw } from "../utils/ViewpointEmulator";
import Text from "./CText";
import Stack from "./Stack";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { FontSizeConstants } from "../constants/font-size";

export default function SettingButton(props: any): JSX.Element {
    const {text, onPress} = props;

    return (
        <Stack
            width={vw(90)}
            height={vh(5)}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={"row"}
            onPress={onPress}
        >
            <Stack width={"80%"} height={"100%"} justifyContent={"center"} alignItems={"flex-start"}>
                <Text value={text} size={FontSizeConstants.nm} />
            </Stack>
            <Stack width={"20%"} height={"100%"} justifyContent={"center"} alignItems={"flex-end"}>
                <Image source={IMAGE_RESOURCE.setting.iconForward} style={{width: "30%", height: "30%"}} />
            </Stack>
        </Stack>
    );
}
