import { Image } from "react-native";
import { FontSizeConstants } from "../constants/font-size";
import { vh, vw } from "../utils/ViewpointEmulator";
import Text from "./CText";
import Stack from "./Stack";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { COLORS } from "../constants/color";

export default function SettingProfileButton(props: any): JSX.Element {
    const { name, image, onPressButton, onPressViewProfile } = props;

    return (
        <Stack
            width={vw(90)}
            height={vh(15)}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={"row"}
            onPress={onPressButton}
        >
            <Stack
                width={"80%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                flexDirection={"row"}
            >
                <Stack
                    width={"30%"}
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Image
                        source={image}
                        style={{
                            width: "60%",
                            height: "60%",
                            borderRadius: vh(15),
                            aspectRatio: 1,
                        }}
                        resizeMode="contain"
                    />
                </Stack>
                <Stack
                    width={"70%"}
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    gap={vh(0.5)}
                >
                    <Text value={name} size={FontSizeConstants.nm} />
                    <Stack onPress={onPressViewProfile}>
                        <Text
                            value={"View Profile"}
                            size={FontSizeConstants.sm}
                            color={COLORS.tertiary.text}
                        />
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                width={"20%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"flex-end"}
            >
                <Image
                    source={IMAGE_RESOURCE.setting.iconForward}
                    style={{ height: "20%", aspectRatio: 1 }}
                />
            </Stack>
        </Stack>
    );
}
